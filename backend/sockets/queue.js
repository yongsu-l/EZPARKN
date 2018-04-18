// sockets/queue.js

module.exports = function Server(io, socket, db) {

  socket.on('join queue', () => {
    socket.join('queue');
  });
};
