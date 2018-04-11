// sockets/index.js
module.exports = function Server(io) {
  io.on('connection', socket => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};
