//routes/user/login.js
const bcrypt = require('bcrypt');

module.exports = (db, express, createToken) => ({
  router() {
    const router = express.Router();
    router.post('/', this.loginUser);
    return router;
  },
  loginUser(req, res) {
    if (!req.body.username || !req.body.password)
      res.status(400).json({success: false, msg: 'Need username and password'});
    else {
      db.users.find({
        where: {
          username: req.body.username
        }
      }).then(user => {
        if (!user) {
          res.status(400).json({success:false, msg: 'Username does not exist'});
        } else {
          bcrypt.compare(req.body.password, user['dataValues'].password, function(err, result) {
            if (err) throw err;
            if (result) {
              let token = createToken(user['dataValues']);
              res.status(200).json({success:true, token});
            } else {
              res.status(400).json({success:false, msg: 'Password is incorrect'});
            }
          });
        }
      })
    }
  }
});
