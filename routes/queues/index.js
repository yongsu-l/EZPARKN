// routes/queues/index.js

const db          = require('../../models');
const express     = require('express');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../../auth/verifyToken');
const env     = process.env.NODE_ENV || 'development';
const config  = require('../../config/config')[env];

const router  = express.Router();
//Create token
function createToken(user) {
  console.log(config.secretOrKey);
  return jwt.sign(_.omit(user, 'password'), config.secretOrKey, {expiresIn: '24h'});
};

router.use('/create', require('./create')(db, express, verifyToken).router());

module.exports = router;