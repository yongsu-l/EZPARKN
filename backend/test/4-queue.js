// tests/3-queue.js  

const expect = chai.expect;
const testMsg = 'Hello MSG';

describe('Socket IO Queue Connection', function() {
	beforeEach(function(done) {
		sender = io(socketURL);
		receiver = io(socketURL);
    notreceiver = io(socketURL);
		done();
	});

	afterEach(function(done) {
		sender.disconnect();
		receiver.disconnect();
    notreceiver = io(socketURL);
		done();
	});

	describe('Joining queue room', function(){

		it('Client should be notified when another client is posting leave time', function(done){

      // First park a user
      sender.emit('park', {lat: 1, long: 1, userId: 2});
      sender.emit('leaving parking', {leavingTime: Date.now(), id: 1});

      sender.on('updated parking', function(data) {
        expect(data.leavingTime).to.not.be.null;
      });

      notreceiver.on('spots', function(spots) {
        // Those who didn't subscribe to queue should not receive anything so this would automatically throw error
        expect(1).to.equal(0);
      });

      // The clients who are in the queue should now be able to get an emit
      // which is triggered when a car leaves;
      receiver.emit('join queue', {});
      receiver.on('notify', function(spots) {
        expect(spots).to.not.be.empty;
        done();
      });
		});

	});
});
