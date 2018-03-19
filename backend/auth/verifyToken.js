const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = function verifyToken(req, res, next) {
  let token = req.headers['x-access-token'];

  if (!token)
    return res.status(403).json({success: false, message: 'No token provided'});

  jwt.verify(token, config.secretOrKey, (err, decoded) => {
    if (err)
      return res.status(500).json({success: false, msg: 'Failed to authenticate'});

    req.userID = decoded.userID;
    next();
  });
};
