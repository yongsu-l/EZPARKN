// test/helpers.js
const chai      = require('chai');
const chaiHttp  = require('chai-http');
const app       = require('server')['app'];
const server    = require('server')['server'];
const db        = require('models');
const io        = require('socket.io-client');
const socketURL = 'http://localhost:3001';

const user1 = "TESTUSER";
const pass1 = "password";

const user2 = "TESTUSER2";
const pass2 = "password";

var token1 = "";
var token2 = "";

chai.use(chaiHttp);

global.app = app;
global.server = server;
global.chai = chai;
global.request = chai.request(app);
global.db = db;
global.io = io;
global.socketURL = socketURL;
global.user1 = user1;
global.pass1 = pass1;
global.user2 = user2;
global.pass2 = pass2;
global.token1 = token1;
global.token2 = token2;
