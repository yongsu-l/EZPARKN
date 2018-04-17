// test/2car.js

var should = chai.should();

describe('Cars',() => {
	describe('/log in as user, create a car',() => {
		var token;
		it('it should log in as user and create', (done)=>{
			var user = {
				username: "TESTUSER",
				password: "password",
				email:"TESTUSER@myemail.com"
			};
			var car = {
				make:"Honda",
				model:"Civic",
				color:"White",
				size: "Compact"
			};
			request
				.post('/api/user/login')
				.send(user)
				.end((err,res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('success');
					token = res.body.token;
					request
						.put('/api/car/create')
						.set('x-access-token',token)
						.send(car)
						.end((err,res) => {
							res.should.have.status(200);
							res.body.should.be.a('object');
							res.body.should.have.property('success',true);
							res.body.should.have.property('msg','Car created');
						});
				done();
			});
		});
	});

	describe('/log in as user, update the car',() => {
		var token;
		it('it should log in as user and create', (done)=>{
			var user = {
				username: "TESTUSER",
				password: "password",
				email:"TESTUSER@myemail.com"
			};
			var car = {
				make:"Honda",
				model:"Civic",
				color:"White",
				size: "Compact"
			};
			chai.request(app)
				.post('/api/user/login')
				.send(user)
				.end((err,res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('success');
					token = res.body.token;
					chai.request(app)
						.put('/api/car/create')
						.set('x-access-token',token)
						.send(car)
						.end((err,res) => {
							res.should.have.status(200);
							res.body.should.be.a('object');
							res.body.should.have.property('success',true);
							res.body.should.have.property('msg','Car updated');
						});
				done();
			});
		});
	});
});

