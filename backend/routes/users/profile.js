//routes/user/profile.js

module.exports = (db, express, createToken, verifyToken) => ({
  router() {
    const router = express.Router();
    router.get('/', verifyToken, this.getUserProfile);
    router.put('/', verifyToken, this.UpdateUserProfile);
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
  },

  UpdateUserProfile(req, res) {
    db.users.find({
      where: {
        id: req.id
      }
    }).then(user => {
      if (!user)
        res.status(404).json({success: false, msg: 'Failed to find user'});
      else {
        if (!req.body.firstname || !req.body.lastname || !req.body.email)
          res.status(400).json({success: false, msg: 'Must send firstname, lastname, and email'});
        else {
          db.users.update(
            {
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email
            },
            {
              where: {
                id: req.id
            },
          }).then(user => {
            //console.log(res);
            if (!user) 
              res.status(400).json({success: false, msg: 'Failed to update profile'});
            else {
              res.status(201).json({success: true, msg: 'Successfully updated profile'});
            }
          }).catch(err => {
            res.status(400).json({success: false, msg: "ERROR"});
          });
        }

      }
    }).catch(err => {
      res.status(400).json({success: false, msg: err});
    });
  },
});
