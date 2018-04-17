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
  });
};
