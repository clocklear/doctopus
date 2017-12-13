const passport = require("passport")
const bcrypt = require("bcrypt")
const LocalStrategy = require("passport-local").Strategy
const path = require("path")
const orm = require(path.join("..", "models"))

function findUser (username, callback) {
  orm.models.user.findOne({userName: username}).exec((err, user) => callback(err, user))
}

passport.serializeUser((user, cb) => {
  cb(null, user.userName)
})

passport.deserializeUser((username, cb) => {
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
}

module.exports = initPassport
