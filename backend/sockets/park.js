// sockets/park.js

module.exports = function Server(io, socket, db) {
  socket.on('park', function(data) {
    console.log(data);
    db.parkings.create({
      lat: data.lat,
      long: data.long,
      userId: data.userId
    }).then((parking) => {
      console.log(parking);
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
};
