// sockets/park.js
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

module.exports = function Server(io, socket, db) {

	// To park must send request to db
	socket.on('park', function(data) {
		db.parkings.create({
			lat: data.lat,
			long: data.long,
			userId: data.userId
		}).then((parking) => {
			if (!parking)
				console.log('Error in submitting parking');
			else {
				db.parkings.findAll().then(function(parkings) {
					io.emit('parking spots', parkings);
				}).catch(err => {
					// console.log(err);
				});
			};
		}).catch(err => {
			// console.log(err);
		});
	});

	// Update parking spot
	socket.on('leaving parking', function(data) {
		// First check if the parking spot is in db
		if (!data.token) {
			// Must pass token to check in db
			socket.emit('error', "Need to send token");
		} else {
			jwt.verify(data.token, config.secretOrKey, (err, decoded) => {
				if (err)
					socket.emit('error', "Invalid token");
				else {
					let id = decoded.id;
					db.parkings.find({
						where: {
							userId: id
						},
					}).then(parking => {
						if (!parking) {
							// No parking found
							console.log("NO parking found");
						} else {
							// Update leaving time accordingly 
							if (!data.leavingTime) {
								socket.emit('error', "Need leaving time");
							}
							else {
								db.parkings.update(
                  {leavingTime: data.leavingTime},
                  {
									where: {
										userId: id
									},
								}).then(res => {
                  console.log("HELLO WORLD");
									if (!res)
										socket.emit('error', "Error updating time");
									else {
										db.parkings.findAll({
											where: {
												leavingTime: {
													[db.op.ne]: null
												}
											}
										}).then(spots => {
											if (!spots)
												io.to('queue').emit('error', "Error updating parking spots");
											else {
												io.to('queue').emit('notify', spots);
												socket.emit('spots', spots);
											}
										}).catch(err => {
                      io.to('queue').emit('notify', "HELLO WORLD");
											console.log(err);
										}); 
                  }
                }).catch(err => {
                  console.log(err);
                });
              }
            }
          }).catch(err => {
            // console.log(err);
          });
        }
      });
    }
  });

};
