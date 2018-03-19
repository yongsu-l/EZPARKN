//routes/user/login.js

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
          username: req.body.username,
          password: req.body.password
        }
      }).then(user => {
        if (!user) {
          res.status(400).json({success:false, msg: 'Login failed'});
        } else {
          let token = createToken(user['dataValues']);
          res.status(200).json({success:true, token});
        }
      })
    }
  }
});
