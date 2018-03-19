// server.js

const express       = require('express');
const path          = require('path');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const env           = process.env.NODE_ENV || 'development';
const port          = process.env.PORT || 3001;
const config        = require('./config/config')[env];
const colors        = require('colors');
const cors          = require('cors');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//Add routes
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log("Server is up and running on port ".green + port);
});

module.exports = app;
