import openSocket from 'socket.io-client';
import { URL } from 'urls/API';


const  socket = openSocket('/');

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

function iAmLeaving(leavingTime, lat, long, token, cb) {
  socket.emit('leaving parking', {
  		leavingTime: leavingTime,
        lat: lat,
        long: long,
        token: token,
      });
  socket.on('spots', parkingSpots => cb(null, parkingSpots));
  socket.on('error', err => cb(err, {}));

}

function joinQueue(cb){
	socket.emit('join queue');
}

function leaveQueue(cb){
	socket.emit('leave queue');
}

export { subscribeToParkingSpots, iAmParking, iAmLeaving, joinQueue, leaveQueue };