// config.js

const fs = require('fs');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'data/dev-db.sqlite3',
    secretOrKey: 'parknsoez'
  },
  test: {
    username: 'database_test',
    password: 'password',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host:     process.env.DB_HOSTNAME,
    dialect: 'mysql'
  }
};

