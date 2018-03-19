//routes/user/profile.js

module.exports = (db, express, createToken, verifyToken) => ({
  router() {
    const router = express.Router();
    router.get('/', verifyToken, this.getUserProfile);
    return router;
  },
  getUserProfile(req, res) {
    res.send('Hi');
  }
});
