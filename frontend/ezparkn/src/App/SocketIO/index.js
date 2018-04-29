import openSocket from 'socket.io-client';
import { URL } from 'urls/API';


const  socket = openSocket(URL);

function subscribeToParkingSpots(cb) {
  socket.emit('parking');
  socket.on('spots', parkingSpots => cb(null, parkingSpots));
  socket.on('error', err => cb(err, {}));
}

// function makeParking(cb) {
	
//   socket.emit('park', {
//         lat: 123,
//         long: 456,
//         userId: 1
//       });

//   socket.on('parking spots', parkings => {
//   	console.log(parkings);
//   })
// }


export { subscribeToParkingSpots };