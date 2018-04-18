// sockets/queue.js

module.exports = function Server(io, socket, db) {
	socket.on('message', function(msg){
		io.sockets.emit('message', msg);
	});

	socket.on('add time', function(user, time) {
             	    		
	});
};
