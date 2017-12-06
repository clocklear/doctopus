var passport = require('passport');
var express = require('express');
var router = express.Router();
var debug = require('debug')('model:user');

router.get('/profile', passport.authenticationMiddleware(), function (req, res) {
  debug(req.user);
  res.json({
    "msg": "ok"
  });
});
router.post('/login', passport.authenticate('local'), function (req, res) {
  res.json({
    "msg": "success"
  });
});
router.post('/logout', function (req, res) {
  req.logout();
  res.json({
    "msg": "session terminated"
  });
})

module.exports = router;