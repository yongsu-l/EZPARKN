// models/cars.js

module.exports = (sequelize, Sequelize) => {
  const Cars = sequelize.define('cars', {
    id : {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: Sequelize.INTEGER
    },

    userId: {
      allowNull: false,
      unique: true,
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'users'
        },
        key: 'id'
      }
    },
    make : {
      allowNull: false,
      type: Sequelize.STRING
    },
    model: {
      allowNull: false,
      type: Sequelize.STRING
    },
    color : {
      allowNull: false,
      type: Sequelize.STRING
    },
    size: {
      allowNull: false,
      type: Sequelize.STRING
    }
  });

  return Cars;
};
