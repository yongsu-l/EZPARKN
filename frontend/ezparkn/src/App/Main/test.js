//test with niffy 
/*TO RUN: 
git clone: https://github.com/segmentio/niffy
and replace index.js file with code below
in terminal, go to directory and run command: make test
if you run into an error, you can run: DEBUG=nightmare* make test
*/
var debug = require('debug')('niffy:test');
var should = require('chai').should();
var Niffy = require('..');

describe('Google', function () {
  var niffy

  before(function () {
    niffy = new Niffy(
      'https://ezparkn-ccny.herokuapp.com',
      'http://localhost:3000',
      { show: true }
    )
  })

  it('Homepage', function* () {
    yield niffy.test('/')
  })

  it('LogIn', function* (){
    yield niffy.goto('/', function* (nightmare){
      yield nightmare
        .type('input[type="username"]', 'Julia')
        .type('input[type="password"]', 'Password1')
        .click('button[type="submit"]')
    })
  })

  it('Main', function* (nightmare){
    yield niffy.test('/main')
  })

  after(function* () {
    yield niffy.end()
  })
})
