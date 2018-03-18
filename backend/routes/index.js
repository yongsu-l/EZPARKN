// routes/index.js

const db      = require('../models');
const express = require('express');
const router  = express.Router();
const env     = process.env.NODE_ENV || 'development';
const config  = require('../config/config')[env];

router.get('/', function(req, res) {
  res.status(200).send("hi")
});

router.use('/user', require('./users'));

module.exports = router;
