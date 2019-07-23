const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');

dotenv.load();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(expressSession({ 
    secret: process.env.session_secret, 
    resave: false, 
    saveUninitialized: false 
}));

module.exports = app;