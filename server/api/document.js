const path = require('path');
const authmw = require(path.join('..', 'auth')).middleware;
const express = require('express');
const router = express.Router();
const orm = require(path.join('..', 'models'));
const debug = require('debug')('doctopus:api:document');

// Find all
router.get('/', authmw(), (req, res, next) => {
  orm.models.document.find().exec((err, docs) => {
    if (err) {
      return res.status(500).json({
        error: err.message ? err.message : err
      });
    }
    return res.json(docs);
  });
});

// Find by PK
router.get('/:id', authmw(), (req, res, next) => {
  orm.models.document.findOne(req.params.id).exec((err, doc) => {
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
router.post('/', authmw(), (req, res, next) => {

});

module.exports = router;
