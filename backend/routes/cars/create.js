//routes/car/create.js
const verifyToken  = require('../../auth/verifyToken');

module.exports = (db, express, createToken) => ({
  router() {
    const router = express.Router();
    router.post('/',verifyToken, this.createCar);
    router.get('/', verifyToken, this.get);
    return router;
  },
  get(req, res) {    
    res.status(202).json({success: false,userID:req.userID ,msg: 'The request has been accepted for processing. CreateCar implimintation not complete.'});
  },

  createCar(req, res) {
    if (!req.body.make || !req.body.model || !req.body.color || !req.body.size)
      res.status(400).json({success: false, msg: 'Failed to create car'});
    else {
      db.users.find({
        where: {
          id: req.id
        }
      }).then(user => {
        db.cars.create({
          user_id: user.id,
          size: req.body.size,
          make: req.body.make,
          model: req.body.model,
          color: req.body.color
        }).then((car) => {
            res.status(200).json({success: true, msg: 'Car created'});
        }).catch(() => {
            res.status(400).json({success: false, msg: 'Failed to create a car'});
        })
      }).catch(() => {
        //Good token but no user found?????
        res.status(404).json({success: false, msg: 'You seem to be lost...'});  
      });
    }
  }
});
