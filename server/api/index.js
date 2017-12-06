var express = require('express');
var path = require('path');
var router = express.Router();

/** Set up API endpoints */
router.use('/document', require(path.join(__dirname, 'document')))
router.use('/user', require(path.join(__dirname, 'user')))

module.exports = router;
