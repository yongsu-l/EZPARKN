// sockets/queue.js

module.exports = function Server(io, socket, db) {

	socket.on('enter queue', function(data) {
    socket.join('queues');
  });
};
