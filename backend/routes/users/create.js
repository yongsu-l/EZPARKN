//routes/user/create.js
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (db, express, createToken) => ({
  router() {
    const router = express.Router();
    router.post('/', this.createUser);
    return router;
  },
  createUser(req, res) {
    if (!req.body.username || !req.body.password || !req.body.email)
      res.status(400).json({success: false, msg: 'Failed to create user'});
    else {
      db.users.find({
        where: {
          username: req.body.username
        }
      }).then(user => {
        if (!user) {
          db.users.find({
            where: {
              email: req.body.email
            }
          }).then(user => {
            if (!user) {
              bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                db.users.create({
                  username: req.body.username,
                  email: req.body.email,
                  password: hash
                }).then((user) => {
                  if (!user)
                    res.status(400).json({success: false, msg: 'Failed to create user'});
                  else {
                    let token = createToken(user['dataValues']);
                    res.status(201).json({success: true, token});
                  }
                })
              });
            } else {
              res.status(400).json({success: false, msg: 'Email already exists'});
            }
          })
        } else {
          res.status(400).json({success: false, msg: 'Username already exists'});
        }
      })
    }
  }
});
