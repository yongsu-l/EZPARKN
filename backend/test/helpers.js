// test/helpers.js
const chai      = require('chai');
const chaiHttp  = require('chai-http');
const app       = require('server')['app'];
const server    = require('server')['server'];
const db        = require('models');
const io        = require('socket.io-client');
const socketURL = 'http://localhost:3001';

const username = "TESTUSER";
const password = "password";

var token = "";

chai.use(chaiHttp);

global.app = app;
global.server = server;
global.chai = chai;
global.request = chai.request(app);
global.db = db;
global.io = io;
global.socketURL = socketURL;
global.username = username;
global.password = password;
global.token = token;
