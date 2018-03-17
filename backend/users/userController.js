// users/userController.js

const express     = require('express');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../auth/verifyToken');

const router      = express.Router();

router.use(bodyParser.urlencoded({ extended: true  }));
router.use(bodyParser.json());

const query = require('./user');

// Add more routes

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), CONFIG.secretKey, {expiresIn: '24h'});
};

router.post('/create', (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.email)
    res.status(400).send("You must send username and password");
  query.emailExists(req.body.email, (emailCheck) => {
    if(emailCheck)
      res.status(400).json({
        success: false,
        msg: "A user with that email already exists"
      });
    else {
      query.usernameExists(req.body.username, (usernameCheck) => {
        if(usernameCheck)
          res.status(400).json({
            success: false,
            msg: "A user with that username already exists"
          });
        else {
          query.createUser({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
          }, (newUser) => {
            let token = createToken(newUser);
            res.status(201).json({
              success: true,
              msg: "User successfully created",
              username: newUser.username,
              id_token: token
            });
          });
        }
      });
    }
  });
});

router.post('/login', (req, res) => {
  if (!req.body.username || !req.body.password)
    res.status(400).json({
      success: false,
      msg: "You must pass both username and password"
    });
  query.getUser(req.body.username, (user) => {
    if (!user)
      res.status(401).json({
        success: false,
        msg: "Username does not exist"
      });
    if (user.password !== req.body.password) {
      res.status(401).json({
        success: false,
        msg: "Username and Password do not match"
      });
    }
    else {
      res.status(201).json({
        success: true,
        username : user.username,
        id_token: createToken(user),
      });
    }
  });
});

module.exports = router;
