var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var auth = require(path.join(__dirname, 'auth'))
var RedisStore = require('connect-redis')(session);
var config = require('config');

var app = express();

// Initialize session & passport auth
auth.init(app)
var redisCfg = config.get("redis");
var redisStore = new RedisStore({
  url: redisCfg.url
});
app.use(session({
  store: redisStore,
  secret: redisCfg.secret,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mount api
var api = require(path.join(__dirname, 'api'));
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({"err": "not found"});
});

// Add a custom shutdown function for wrapping any processes
// that we may need to -- connect-redis was preventing
// my test shutdowns, so this gives me an easy way to 
// expose a cleanup func
app.shutdown = function (cb) {
  cb = cb || function () {};
  redisStore.client.quit();
  cb();
}

module.exports = app;
