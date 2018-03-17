//models/user.js

const db          = require('../models');
const express     = require('express');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../auth/verifyToken');

const router  = express.Router();
//Create token
function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), CONFIG.secretKey, {expiresIn: '24h'});
};

router.get('/', (req, res) => {
});

module.exports = router;
