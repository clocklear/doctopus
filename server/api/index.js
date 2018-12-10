const express = require("express")
const path = require("path")
const router = express.Router()

/** Set up API endpoints */
router.use("/document", require(path.join(__dirname, "document")))
router.use("/user", require(path.join(__dirname, "user")))

module.exports = router
