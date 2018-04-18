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
    });
  });

  // To mark that one is leaving, the leaving time value is passed
  socket.on('leaving parking', function(data) {
    db.parkings.update({leavingTime: data.leavingTime}, {where: {id: data.id}})
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
              io.to('queues').emit('error', "Error updating parking spots");
            else
              io.to('queues').emit('new parking spots', spots);
          });
        }
      });
  });
};
