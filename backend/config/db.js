// db.js

var mysql = require('mysql');
var pool  = null

exports.connect = function() {
  pool = mysql.createPool({
    connectionLimit : 10,
    host     : CONFIG.db_host,
    user     : CONFIG.db_user,
    password : CONFIG.db_password,
    database : CONFIG.db_name
  });
}

exports.get = function() {
  return pool;
}
