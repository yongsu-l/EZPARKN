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

		it('Client should be able to join the room of queue when requested', function(done){

      // First park a user
      sender.emit('park', {lat: 1, long: 1, userId: 2});
      sender.emit('leaving parking', {leavingTime: Date.now(), id: 1});

      sender.on('updated parking', function(data) {
        console.log(data);
        expect(data.leavingTime).to.not.be.null;
      });

      notreceiver.on('new parking spots', function(spots) {
        // Those who didn't subscribe to queue should not receive anything so this would automatically throw error
        expect.to.be.empty(spots);
      });

      // The clients who are in the queue should now be able to get an emit
      // which is triggered when a car leaves;
      receiver.emit('enter queue', {});
      receiver.on('new parking spots', function(spots) {
        expect(spots).to.not.be.empty;
        done();
      });
		});

	});
});
