// sockets/queue.js

module.exports = function Server(io, socket, db) {

  socket.on('join queue', () => {
    socket.join('queue');
  });

  socket.on('leave queue', () => {
    socket.leave('queue');
  });

  socket.on('take spot', (token) => {
    // Decode token.
    // Then identify user
    // then update database to associate people who have parked and marked are leaving by the person who wants to take parking spot
    // then emit to all people who are in queue, that doesn't have any people who want to take parking spot within db
  });
};
