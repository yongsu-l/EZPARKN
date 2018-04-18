// tests/3-queue.js  

const expect = chai.expect;
const testMsg = 'Hello MSG';

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

	describe('Basic Message Event', function(){
		it('Clients should receive a message when the `message` event is emited.', function(done){
			sender.emit('message', testMsg);
			receiver.on('message', function(msg){
				expect(msg).to.equal(testMsg);
				done();
			});
		});
	});

});
