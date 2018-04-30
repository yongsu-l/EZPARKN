// sockets/park.js

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
        }).catch(function(err) {
          console.log(err);
        });
      };
    }).catch((err) => {
      console.log(err);
    });
  });

  // To mark that one is leaving, the leaving time value is passed
  socket.on('leaving parking', function(data) {
    db.parkings.update({leavingTime: data.leavingTime}, 
      {
        where: {
          userId: data.userId
        }
      })
      .then((result) => {
        if (!result)
          socket.emit('error', 'Error in add leaving time');
        else {
          db.parkings.findAll({
            where: {
              leavingTime: {
                [db.op.ne]: null
              }
            }
          }).then((spots) => {
            if (!spots)
              io.to('queue').emit('error', "Error updating parking spots");
            else {
              io.to('queue').emit('notify', spots);
              socket.emit('spots', spots);
            }
          })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  });

  // To mark that one is leaving, the leaving time is passed.
  // If the user doesn't want to park first but just state that they're leaving,
  // then it'll automatically be created in the db.
  socket.on('leaving parking', function(data) {
    db.parkings.findOrCreate({
      where: {userId: data.userId}
    }).then((results) => {
      
    }).catch((err) => {
      console.log(err);
    });
  });

};
