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
        },
        attributes: ['username', 'firstname', 'lastname', 'password']
      }).then(user => {
        if (!user) {
          res.status(404).json({success:false, msg: 'Username does not exist'});
        } else {
          bcrypt.compare(req.body.password, user['dataValues'].password, function(err, result) {
            if (err) throw err;
            if (result) {
              let token = createToken(user['dataValues']);
              console.log(user);
              delete user['dataValues'].password;
              res.status(200).json({success:true, token, profile: user});
            } else {
              res.status(401).json({success:false, msg: 'Password is incorrect'});
            }
          });
        }
      });
    }
  }
});
