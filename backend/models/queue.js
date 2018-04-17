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
    msg: {
      allowNull: false,
      type: Sequelize.STRING
    },
    time: {
      allowNull: false,
      type: Sequelize.DATE
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
