// models/index.js

const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const config    = require('../config/config')[env];
const db        = {};

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  define: {
    timestamps: false
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.users = require('./users')(sequelize, Sequelize);
db.cars = require('./cars')(sequelize, Sequelize);

//Relations
db.users.hasOne(db.cars);
db.cars.belongsTo(db.users);

module.exports = db;
