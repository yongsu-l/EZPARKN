// tests/3-parking.js  

const expect = chai.expect;

describe('Socket IO Queue Connection', function() {
	beforeEach(function(done) {
		sender = io(socketURL);
		receiver = io(socketURL);
		done();
	});

	afterEach(function(done) {
		sender.disconnect();
		receiver.disconnect();
		done();
	});

  describe('Parking Spots on Connection', function(){
    it('Clients should receive parking spots on connection.', function(done){
      sender.emit('get parking', '123'); // Must pass token
      sender.on('parking spots', function(parkings){
        console.log(parkings);
        expect(parkings).to.not.be.null;
        done();
      });
    });
  });

  describe('Make parking spot', function(){
    it('When client makes a parking spot, it should update on other connected clients', function(done){
      sender.emit('park', {
        lat: 123,
        long: 456,
        userId: 1
      });
      receiver.on('parking spots', function(parkings){
        console.log(parkings);
        expect(parkings).to.not.be.null;
        done();
      });
    });
  });

});
