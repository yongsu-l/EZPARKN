// models/queue.js

module.exports = (sequelize, Sequelize) => {

  const Queue = sequelize.define('queues', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: Sequelize.INTEGER
    },
    time: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOWW
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
    } 
  });
  return Queue;
};
