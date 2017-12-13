const path = require("path")
const authmw = require(path.join("..", "auth")).middleware
const passport = require("passport")
const express = require("express")
const router = express.Router()
// const debug = require("debug")("model:user")

router.get("/profile", authmw(), (req, res) => {
  // debug(req.user);
  res.json({
    "msg": "ok"
  })
})
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    "msg": "success"
  })
})
router.post("/logout", (req, res) => {
  req.logout()
  res.json({
    "msg": "session terminated"
  })
})

module.exports = router