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

  describe('Select a parking spot', function(){
    it('When client chooses a parking ahead of time, it should update that they are parked', function(done){
      sender.emit('take spot', {token: token1, parkingId: 1});
      sender.on('spots', (parkings) => {
        expect(parkings).to.not.be.null;
        receiver.on('spots', function(parkings){
          console.log(parkings);
          expect(parkings).to.not.be.null;
          done();
        });
      });
    });
  });
  
});
