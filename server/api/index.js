var express = require('express');
var path = require('path');
var router = express.Router();

/** Set up API endpoints */
router.use('/documents', require(path.join(__dirname, 'documents')))
router.use('/user', require(path.join(__dirname, 'user')))

module.exports = router;
