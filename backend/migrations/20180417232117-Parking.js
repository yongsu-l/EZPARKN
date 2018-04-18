'use strict';

const models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.parkings.tableName, models.parkings.attributes);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(models.parkings.tableName);
  }
};
