// routes/cars/index.js

const db          = require('../../models');
const express     = require('express');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');
const verifyToken = require('../../auth/verifyToken');
const env     = process.env.NODE_ENV || 'development';
const config  = require('../../config/config')[env];

const router  = express.Router();

router.use('/create', require('./create')(db, express).router());

module.exports = router;
