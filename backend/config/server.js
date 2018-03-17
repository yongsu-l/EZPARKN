// app.js

require('./config');

const app         = require('express')();
const bodyParser  = require('body-parser');
const colors      = require('colors');
const db          = require('./db');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to EZPARKN REST API'));

//API Routes 
const user = require('../users');

app.use('/user', user['router']);

app.listen(CONFIG.port, () => {
  console.log("Server is up and running on port ".green + CONFIG.port.yellow);
});
