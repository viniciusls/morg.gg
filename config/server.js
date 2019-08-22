const express = require('express');
const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');
const expressSession = require('express-session');

require('dotenv').config({
    silent: true
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(expressValidator());
app.use(expressSession({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: false
}));

app.use('/api/hello', require('../routes/hello')());

module.exports = app;
