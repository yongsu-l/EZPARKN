// test/helpers.js
const chai      = require('chai');
const chaiHttp  = require('chai-http');
const app       = require('server')['app'];
const server    = require('server')['server'];
const db        = require('models');
const io        = require('socket.io-client');

chai.use(chaiHttp);

global.app = app;
global.server = server;
global.chai = chai;
global.request = chai.request(app);
global.db = db;
global.io = io;
