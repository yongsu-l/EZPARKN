// models/users.js

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('users', {
    id : {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: Sequelize.INTEGER
    },
    username : {
      required: true,
      unique: true,
      type: Sequelize.STRING
    },
    password: {
      required: true,
      type: Sequelize.STRING
    },
    email : {
      required: true,
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
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

  return Users;
};
