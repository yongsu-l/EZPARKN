// users/user.js

const db = require('../config/db');

db.connect();

module.exports = {
  createUser : (user, done) => {
    db.get().query('INSERT INTO users SET ?', [user], (err, result) => {
      if (err) throw err;
      db.get().query('SELECT * FROM users WHERE username = ? LIMIT 1', [user.username], (err, rows, fields) => {
        if (err) throw err;
        done(rows[0]);
      })
    });
  },

  getUser : (username, done) => {
    db.get().query('SELECT * FROM users WHERE username = ? LIMIT 1', [username], (err, rows, fields) => {
      if (err) throw err;
      done(rows[0]);
    });
  },

  getUserByID : (userID, done) => {
    //console.log(userID);
    db.get().query('SELECT * FROM users WHERE userID = ? LIMIT 1', [userID], (err, rows, fields) => {
      if (err) throw err;
      //console.log(rows);
      done(rows[0].username);
    });
  },

  emailExists : (email, done) => {
    db.get().query('SELECT * FROM users WHERE email = ? LIMIT 1', [email], (err, rows, fields) => {
      if (err) throw err;
      done(rows.length > 0);
    })
  },

  usernameExists : (username, done) => {
    db.get().query('SELECT * FROM users WHERE username = ? LIMIT 1', [username], (err, rows, fields) => {
      if (err) throw err;
      done(rows.length > 0);
    })
  }
};
