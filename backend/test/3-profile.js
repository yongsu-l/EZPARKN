// file: test/5-profile.js

var User = db['users'];
var should = chai.should();
var token = "";

describe('Profile', () => {

	describe('GET Profile of User with token', () => {

		it('it should try to get the user profile', (done) => {
      var user = {
        username: username,
        password: password
      };
			request
				.post('/api/user/login')
				.send(user)
				.end((err,res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('success',true);

          token = res.body.token;

					request
						.get('/api/user/profile')
						.set('x-access-token', token)
						.end((err, res) => {
							res.should.have.status(200);
							res.body.should.be.a('object');
							res.body.should.property('success', true);
              done();
						});
				});
		});
	});

  describe('UPDATE Profile of User', () => {
    if('it should try to update user profile', (done) => {
      var profile = {
        firstname: "BOB",
        lastname: "LEE",
        email: "BOBLEE@EZPARKN.COM"
      };

      request
        .put('/api/user/profile')
        .send(profile)
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(201);
          console.log("DONE TESTING FOR PROFILE");
          done();
        });
    });
  });

});
