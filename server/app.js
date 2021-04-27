var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var popRoute = require('./routes/popRoute');
var gdpRoute = require('./routes/gdpRoute');
var app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
  }
app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'build')));

app.use('/country/all/indicator/SP.POP.TOTL',popRoute);
app.use('/country/all/indicator/NY.GDP.MKTP.CD',gdpRoute);


module.exports = app;
