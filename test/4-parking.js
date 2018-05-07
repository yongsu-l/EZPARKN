// tests/4-parking.js  

const expect = chai.expect;

describe('Socket IO Parking Connection', function() {
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
      sender.emit('parking'); // Must pass token
      sender.on('spots', function(parkings){
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
        token: token1
      });
      receiver.on('parking spots', function(parkings){
        expect(parkings).to.not.be.null;
        done();
      });
    });
  });

});
