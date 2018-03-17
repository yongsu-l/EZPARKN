// models/index.js

const db      = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/', function(req, res) {
  res.status(200).send("hi")
});

router.use('/user', require('./user'));

module.exports = router;
