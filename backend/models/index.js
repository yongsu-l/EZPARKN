// models/index.js

var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(path.join(__dirname, '..', 'config', 'config.js'))[env];
var db        = {};

var sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.users = require('./user')(sequelize, Sequelize);
db.cars = require('./car')(sequelize, Sequelize);
db.queues = require('./queue')(sequelize, Sequelize);
db.parkings = require('./parking')(sequelize, Sequelize);

//Relations
db.users.hasOne(db.cars);
db.cars.belongsTo(db.users);
db.queues.belongsTo(db.users);
db.parkings.belongsTo(db.users);

// Operations
db.op = Sequelize.Op;

module.exports = db;
