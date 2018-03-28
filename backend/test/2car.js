var Car = require('../models/car')

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Cars',() => {
	describe('/log in as user, create a car',() => {
		var token;
		it('it should log in as user and create', (done)=>{
			var user = {
				username: "TESTUSER",
				password: "password",
				email:"TESTUSER@myemail.com"
			}
			var car = {
				make:"Honda",
				model:"Civic",
				color:"White",
				size: "Compact"
			}
			chai.request(server)
				.post('/api/user/login')
				.send(user)
				.end((err,res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('success');
					token = res.body.token;
					chai.request(server)
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

		describe('/log in as user, create a car',() => {
		var token;
		it('it should log in as user and create', (done)=>{
			var user = {
				username: "TESTUSER",
				password: "password",
				email:"TESTUSER@myemail.com"
			}
			var car = {
				make:"Honda",
				model:"Civic",
				color:"White",
				size: "Compact"
			}
			chai.request(server)
				.post('/api/user/login')
				.send(user)
				.end((err,res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('success');
					token = res.body.token;
					chai.request(server)
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

