// sockets/park.js
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

module.exports = function Server(io, socket, db) {

	// To park must send request to db
	socket.on('park', function(data) {
    // Verify user by token
    if (!data.token) {
      socket.emit('error', "Need to send token");
    } else {
      jwt.verify(data.token, config.secretOrKey, (err, decoded) => {
        if (err)
          socket.emit('error', "Invalid token");
        else {
          let id = decoded.id;
          // Check if parking is in db
          db.parkings.find({
            where: {
              userId: id
            },
          }).then(parking => {
            if (!parking) {
              db.parkings.create({
                lat: data.lat,
                long: data.long,
                userId: id
              }).then((parking) => {
                if (!parking)
                  console.log('Error in submitting parking');
                else {
                  db.parkings.findAll().then(function(parkings) {
                    io.emit('parking spots', parkings);
                  }).catch(err => {
                    console.log(err);
                  });
                };
              }).catch(err => {
                console.log(err);
              });
            } else {
              // Emit error where the user already parked
              console.log(parking['dataValues']);
              // Delete the entry and make new enty in db
              if (parking['dataValues'].leavingTime != null) {
                db.parkings.destroy({
                  where: {
                    userId: id
                  },
                }).then(res => {
                  db.parkings.create({
                    lat: data.lat,
                    long: data.long,
                    userId: id
                  }).then(res => {
                    if (!res) 
                      console.log("Error creating new parking");
                    else {
                      db.parkings.findAll().then(parkings => {
                        io.emit('parking spots', parkings);
                      }).catch(err => {
                        console.log(err);
                      });
                    }
                  }).catch(err => {
                    console.log(err);
                    socket.emit('error', "Error creating new entry");
                  });
                }).catch(err => {
                  console.log(err);
                  socket.emit('error', "Error deleting entry to create new one");
                });
              }
              else {
                socket.emit('error', "Already parked");
              }
            }
          }).catch(err => {
            console.log(err);
          });
        }
      });
    }
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
							// No parking found hence need to create in db
              // console.log("HELLO WORLD");
              if (!data.leavingTime || !data.lat || !data.long)
                socket.emit('error', "Need leaving time, lat and long");
              else {
                db.parkings.create({
                  userId: id,
                  leavingTime: data.leavingTime,
                  lat: data.lat,
                  long: data.long
                }).then(res => {
                  if (!res)
                    socket.emit('error', "Error entering leaving time");
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
                      // io.to('queue').emit('notify', "HELLO WORLD");
											console.log(err);
										}); 
                  }
                }).catch(err => {
                  console.log(err);
                });
              }
							console.log("NO parking found");
            } else {
							// Update leaving time accordingly 
							if (!data.leavingTime) {
								socket.emit('error', "Need leaving time");
                // console.log("HELLO WORLD");
							} else {
								db.parkings.update(
                  {leavingTime: data.leavingTime},
                  {
									where: {
										userId: id
									},
								}).then(res => {
                  // console.log("HELLO WORLD");
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
                      // io.to('queue').emit('notify', "HELLO WORLD");
											console.log(err);
										}); 
                  }
                }).catch(err => {
                  console.log(err);
                });
              }
            }
          }).catch(err => {
            console.log(err);
          });
        }
      });
    }
  });

  // Allow User to claim parking spot
  socket.on('take spot', function (data) {
    // data.usernameOfParked 
    /*
    1. Find the parking spot with respect to username
       then delete the parking spot.
    */
    if (!data.token) {
      socket.emit('error', "Need to send token");
    } else {
      jwt.verify(data.token, config.secretOrKey, (err, decoded) => {
        if (err)
          socket.emit('error', "Invalid token");
        else {
          let id = decoded.id;
          db.parkings.destroy({
            where: {
              id: data.parkingId
            }
          }).then(res => {
            //console.log(res === 1);
            if (res === 1) {
              db.parkings.findAll({
                include:[{
                  model: db.users,
                  include: [{model: db.cars}]
                }]
              }).then(parkings => {
                //console.log("PARKING SPOTS");
                //console.log(parkings);
                io.emit('spots', parkings);
              }).catch(err => {
                //console.log(err);
                socket.emit('error', 'Failed to take parking spot.');
              });
            } else {
              socket.emit('error', 'Failed to take parking spot.');
            }
          });
        }
      });
    }
  });

};
