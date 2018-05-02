// models/parking.js

module.exports = (sequelize, Sequelize) => {
  const Parking = sequelize.define('parkings', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: Sequelize.INTEGER
    },
    leavingTime: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null
    },
    parkedTime: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
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
    lat: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    long: {
      allowNull: false,
      type: Sequelize.FLOAT
    }
  });
  return Parking;
};
