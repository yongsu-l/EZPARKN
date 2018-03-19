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
      res.status(400).json({success: false, msg: 'Failed to create user'});
    else {
      db.users.find({
        where: {
          id: req.userID
        }
      }).then(user => {
        res.status(202).json({success: false, msg: 'The request has been accepted for processing. CreateCar implimintation not complete.'});
        // if (!user) {
        //   db.users.find({
        //     where: {
        //       email: req.body.email
        //     }
        //   }).then(user => {
        //     if (!user) {
        //       db.users.create({
        //         username: req.body.username,
        //         email: req.body.email,
        //         password: req.body.password
        //       }).then((user) => {
        //         if (!user)
        //           res.status(400).json({success: false, msg: 'Failed to create user'});
        //         else {
        //           let token = createToken(user['dataValues']);
        //           res.status(201).json({success: true, token});
        //         }
        //       })
        //     } else {
        //       res.status(400).json({success: false, msg: 'Email already exists'});
        //     }
        //   })
        // } else {
        //   res.status(400).json({success: false, msg: 'Username already exists'});
        // }
      })
    }
  }
});
