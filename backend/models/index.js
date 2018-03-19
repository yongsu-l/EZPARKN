// models/index.js

const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(path.join(__dirname, '..', 'config', 'config.js'))[env]
const db        = {};

config.operatorsAliases = false;
config.timestamps = false;

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.users = require('./user')(sequelize, Sequelize);
db.cars = require('./car')(sequelize, Sequelize);

//Relations
db.users.hasOne(db.cars);
db.cars.belongsTo(db.users);

module.exports = db;
