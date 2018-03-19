// models/cars.js

module.exports = (sequelize, Sequelize) => {
  const Cars = sequelize.define('cars', {
    id : {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
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
