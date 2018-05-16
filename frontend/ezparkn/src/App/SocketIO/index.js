import openSocket from 'socket.io-client';
import { URL } from 'urls/API';


const  socket = openSocket('/');

function subscribeToParkingSpots(cb) {
  socket.emit('parking');
  socket.on('spots', parkingSpots => cb(null, parkingSpots));
  socket.on('error', err => cb(err, {}));
}

function iAmParking(token, parkingId, cb) {
  socket.emit('take spot', {
    parkingId:parkingId,
    token:token,
  });
  socket.on('error', err => cb(err, {}));
  socket.on('spots', parkings => {
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