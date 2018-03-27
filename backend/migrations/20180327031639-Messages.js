'use strict';

const models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.messages.tableName, models.messages.attributes);
  },

  down: (queryInterface, Sequelize) => { 
    return queryInterface.dropTable(models.cars.tableName);
  }
};