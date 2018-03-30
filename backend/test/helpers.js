// test/helpers.js
var supertest = require('supertest');
var chai      = require('chai');
var chaiHttp  = require('chai-http');
var app       = require('server')['app'];
var server    = require('server')['server'];
var db        = require('models');

chai.use(chaiHttp);

global.app = app;
global.server = server;
global.chai = chai;
global.request = supertest(app);
global.db = db;
