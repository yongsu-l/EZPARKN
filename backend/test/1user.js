// test/1user.js

var User = require('../models/user');
var db    = require('../models');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./test-server');
var should = chai.should();

chai.use(chaiHttp);

describe('Users',() => {
  
	before((done)=>{
    db.sequelize.sync({force:true}).then(() => {
      done();
    });
	});

	describe('/Create a user, and log in',() => {
		it('it should create a user', (done)=>{
			var user = {
				username: "TESTUSER",
				password: "password",
				email:"TESTUSER@myemail.com"
			};
			chai.request(server)
				.post('/api/user/create')
				.send(user)
				.end((err,res) => {
					res.should.have.status(201);
					res.body.should.be.a('object');
					res.body.should.have.property('success',true);
				done();
				});
		});

		it('it should log in as user', (done)=>{
			var user = {
				username: "TESTUSER",
				password: "password",
			};
			chai.request(server)
				.post('/api/user/login')
				.send(user)
				.end((err,res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('success',true);
				done();
				});
		});
	});
		describe('/Test username is taken',() => {
			it('it should try to create a user but get a 400 back', (done)=>{
				var user = {
					username: "TESTUSER",
					password: "password",
					email:"TESTUSER1@myemail.com"
				};
				chai.request(server)
					.post('/api/user/create')
					.send(user)
					.end((err,res) => {
						res.should.have.status(400);
						res.body.should.be.a('object');
						res.body.should.have.property('success',false);
						res.body.should.have.property('msg','Username already exists');
					done();
					});
			});
		});

		describe('/Test email is taken',() => {
		it('it should try to create a user but get a 400 back', (done)=>{
			var user = {
				username: "TESTUSER1",
				password: "password",
				email:"TESTUSER@myemail.com"
			};
			chai.request(server)
				.post('/api/user/create')
				.send(user)
				.end((err,res) => {
					res.should.have.status(400);
					res.body.should.be.a('object');
					res.body.should.have.property('success',false);
					res.body.should.have.property('msg','Email already exists');
				done();
				});
		});
	});
});

