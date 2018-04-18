// sockets/index.js

module.exports = function Server(io, db) {
  
  let userCount = 0;

  io.on('connection', socket => {
    console.log('New client connected');
    userCount++;

    socket.on('disconnect', () => {
      userCount--;
      console.log('User disconnected');
    });

    socket.on('get parking', (token) => {
      db.parkings.findAll().then(function(parkings) {
        io.emit('parking spots', parkings);
      }).catch(function(err) {
        console.log(err);
      });
    });

    // Queue file
    require('./queue.js')(io, socket, db);
    require('./park.js')(io, socket, db);

  });
};
