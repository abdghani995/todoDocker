var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require("path");
const bodyParser = require('body-parser');


var indexRouter = require('./routes/index');

var db = require(path.join(__dirname, 'db', 'connect'));
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);


module.exports = app;
