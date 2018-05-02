'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('parkings', [{
      id: 1,
      leavingTime: "2013-03-20T20:31:45.0005",
      parkedTime: "2013-03-20T20:31:45.0005",
      userId: 1,
      lat:  40.822039,
      long: -73.950239

    },
    {
      id: 2,
      leavingTime: "2013-03-20T20:31:45.0005",
      parkedTime: "2013-03-20T20:31:45.0005",
      userId: 2,
      lat:  40.820047,
      long: -73.949272
    },
    {
      id: 3,
      leavingTime: "2013-03-20T20:31:45.0005",
      parkedTime: "2013-03-20T20:31:45.0005",
      userId: 3,
      lat:  40.822106,
      long: -73.949621
    },
    {
      id: 4,
      leavingTime: "2013-03-20T20:31:45.0005",
      parkedTime: "2013-03-20T20:31:45.0005",
      userId: 4,
      lat:  40.819442,
      long: -73.949406
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
    return queryInterface.bulkDelete('parkings', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
