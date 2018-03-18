'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username : {
        required: true,
        type: Sequelize.STRING
      },
      password: {
        required: true,
        type: Sequelize.STRING
      },
      email : {
        required: true,
        type: Sequelize.STRING
      },
      firstname: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      lastname : {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
