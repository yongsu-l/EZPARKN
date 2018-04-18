'use strict';

const models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.queues.tableName, models.queues.attributes);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(models.queues.tableName);
  }
};
