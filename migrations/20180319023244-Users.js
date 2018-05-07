'use strict';

const models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.users.tableName, models.users.attributes);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(models.users.tableName);
  }
};
