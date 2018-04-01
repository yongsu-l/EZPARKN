// models/users.js

module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('messages', {

    id : {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    msg: {
      allowNull: false,
      type: Sequelize.STRING
    },   
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'users'
        },
        key: 'id'
      }
    }    	  
  });

  return Message;
};
