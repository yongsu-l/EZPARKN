'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      username: 'John',
      password: 'password',
      email: 'John@email.com',
      firstname: 'John',
      lastname: 'Doe'
    },
    {
      id : 2,
      username: 'Emily',
      password: 'password',
      email: 'Jane@email.com',
      firstname: 'Emily',
      lastname: 'Bree'
    },
    {
      id : 3,
      username: 'Janice',
      password: 'password',
      email: 'Janice@email.com',
      firstname: 'Janice',
      lastname: 'Lin'
    },
    {
      id : 4,
      username: 'Monica',
      password: 'password',
      email: 'Monica@email.com',
      firstname: 'Monica',
      lastname: 'Geller'
    }, 
    {
      id : 5,
      username: 'Joey',
      password: 'password',
      email: 'Joey@email.com',
      firstname: 'Janice',
      lastname: 'Trib'
    },
    {
      id : 6,
      username: 'Rob',
      password: 'password',
      email: 'Rob@email.com',
      firstname: 'Rob',
      lastname: 'Lee'
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
