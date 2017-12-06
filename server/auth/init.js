var passport = require('passport')
var bcrypt = require('bcrypt')
var LocalStrategy = require('passport-local').Strategy

var authenticationMiddleware = require('./middleware')
var path = require('path');
var orm = require(path.join('..', 'models'));

function findUser (username, callback) {
  orm.models.user.findOne({userName: username}).exec(function (err, user) {
    return callback(err, user);
  });
}

passport.serializeUser(function (user, cb) {
  cb(null, user.userName)
})

passport.deserializeUser(function (username, cb) {
  findUser(username, cb)
})

function initPassport () {
  passport.use(new LocalStrategy(
    (username, password, done) => {
      findUser(username, (err, user) => {
        if (err) {
          return done(err)
        }

        // User not found
        if (!user) {
          return done(null, false)
        }

        // Always use hashed passwords and fixed time comparison
        bcrypt.compare(password, user.passHash, (err, isValid) => {
          if (err) {
            return done(err)
          }
          if (!isValid) {
            return done(null, false)
          }
          return done(null, user)
        })
      })
    }
  ))

  passport.authenticationMiddleware = authenticationMiddleware
}

module.exports = initPassport
