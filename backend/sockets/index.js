// sockets/index.js

module.exports = function Server(io, db) {
  
  let userCount = 0;

  io.on('connection', socket => {
    userCount++;

    socket.on('disconnect', () => {
      userCount--;
    });

    socket.on('parking', () => {
      db.parkings.findAll().then(function(parkings) {
        socket.emit('spots', parkings);
      }).catch(function(err) {
        console.log(err);
        socket.emit('error', "Error trying to get parking spots");
      });
    });

    // Queue file
    require('./queue.js')(io, socket, db);
    require('./parking.js')(io, socket, db);

  });
};
