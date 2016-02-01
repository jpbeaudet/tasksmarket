// Author: Jean-Philippe Beaudet @ S3R3NITY Technology
// Yap Test Platform.
//


// dependencies
var path = require('path');
var express = require('express');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// main config
var app = express();
var config = require('./scripts/config.js');
var server = require('http').createServer(app);
app.set('port', process.env.PORT || config.port );
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'jade');
app.set('view options', { layout: true });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'taskmarket_secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use("/app", express.static(__dirname + "/app"));

// routes
require('./routes/routes')(app);
console.log(("Express server listening on port " + app.get('port')));

//passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose_express4');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

server.listen(config.port);