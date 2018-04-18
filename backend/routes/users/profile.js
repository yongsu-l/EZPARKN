//routes/user/profile.js

module.exports = (db, express, createToken, verifyToken) => ({
  router() {
    const router = express.Router();
    router.get('/', verifyToken, this.getUserProfile);
    return router;
  },
  getUserProfile(req, res) {
    db.users.find({
      attributes:['firstname', 'lastname', 'email'],
      where: {
        id: req.id
      }
    }).then(user => {
      res.status(200).json({success: true, user});
    }).catch(err => {
      res.status(400).json({success: false, msg: 'Failed to get profile'});
    });
  }
});
