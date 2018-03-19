//routes/car/create.js
const verifyToken  = require('../../auth/verifyToken');

module.exports = (db, express, createToken) => ({
  router() {
    const router = express.Router();
    router.put('/',verifyToken, this.createCar);
    return router;
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
        db.cars.find({
          attributes: ['user_id', 'size', 'make','model','color'], //sequelize added a invalid data field to the query
          where:{
            user_id: user.id,
          }
        }).then(oldCar => {
          console.log(!oldCar);
          if(!oldCar){
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
            
          }
          else{
            db.cars.update({
              size: req.body.size,
              make: req.body.make,
              //model: req.body.model,
              color: req.body.color
            },
            {
              where:{
                user_id: user.id,
              },
              returning: true,
            }).then((car) => {
                res.status(200).json({success: true, msg: 'Car updated'});
            }).catch(() => {
                res.status(400).json({success: false, msg: 'Failed to update a car'});
            })
          }
        }).catch(()=>{
          res.status(400).json({success: false, msg: 'Failed to create a car'});
        })
      }).catch(() => {
        //Good token but no user found?????
        res.status(404).json({success: false, msg: 'You seem to be lost... Are you sure you are logged in?'});  
      });
    }
  }
});
