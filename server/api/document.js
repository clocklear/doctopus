var path = require('path');
var authmw = require(path.join('..', 'auth')).middleware
var express = require('express');
var router = express.Router();
var orm = require(path.join('..', 'models'));
var debug = require('debug')('doctopus:api:document');

// Find all
router.get('/', authmw(), function(req, res, next) {
  orm.models.document.find().exec(function (err, docs) {
    if (err) {
      return res.status(500).json({
        error: err.message ? err.message : err
      });
    }
    return res.json(docs);
  });
});

// Find by PK
router.get('/:id', authmw(), function(req, res, next) {
  orm.models.document.findOne(req.params.id).exec(function (err, doc) {
    if (err) {
      return res.status(500).json({
        error: err.message ? err.message : err
      });
    }
    if (!doc) {
      return res.status(404).json({
        error: "not found"
      });
    }
    return res.json(doc);
  });
});

// Create
router.post('/', authmw(), function (req, res, next) {

});

module.exports = router;
