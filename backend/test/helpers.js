// test/helpers.js
var chai      = require('chai');
var chaiHttp  = require('chai-http');
var app       = require('server')['app'];
var server    = require('server')['server'];
var db        = require('models');

chai.use(chaiHttp);

global.app = app;
global.server = server;
global.chai = chai;
global.request = chai.request(app);
global.db = db;
