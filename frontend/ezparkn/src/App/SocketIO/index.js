import openSocket from 'socket.io-client';
import { URL } from 'urls/API';


const  socket = openSocket(URL);

function subscribeToParkingSpots(cb) {
  socket.emit('parking');
  socket.on('spots', parkingSpots => cb(null, parkingSpots));
  socket.on('error', err => cb(err, {}));
}

function iAmParking(lat, long, userID, cb) {
  socket.emit('park', {
        lat: lat,
        long: long,
        userId: userID,
      });

  socket.on('parking spots', parkings => {
  	console.log(parkings);
  })
}

function iAmLeaving(leavingTime, lat, long, parkingId, cb) {
  socket.emit('leaving parking', {
  		leavingTime: leavingTime,
        lat: lat,
        long: long,
        id: parkingId,
      });

  socket.on('parking spots', parkings => {
  	console.log(parkings);
  })
}

// function queue(cb){
// 	socket.emit('join queue').then((joined) => {console.log(joined)});
// }

export { subscribeToParkingSpots, iAmParking, iAmLeaving };