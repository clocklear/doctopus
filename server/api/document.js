const path = require("path")
const authmw = require(path.join("..", "auth")).middleware
const express = require("express")
const router = express.Router()
const orm = require(path.join("..", "models"))
// const debug = require("debug")("doctopus:api:document")

// Find all
router.get("/", authmw(), (req, res) => {
  orm.models.document.find().exec((err, docs) => {
    if (err) {
      return res.status(500).json({
        error: err.message ? err.message : err
      })
    }
    return res.json(docs)
  })
})

// Find by PK
router.get("/:id", authmw(), (req, res) => {
  orm.models.document.findOne(req.params.id).populate("from").populate("tags").exec((err, doc) => {
    if (err) {
      return res.status(500).json({
        error: err.message ? err.message : err
      })
    }
    if (!doc) {
      return res.status(404).json({
        error: "not found"
      })
    }
    return res.json(doc)
  })
})

// Create
router.post("/", authmw(), (req, res) => {
  orm.models.document.create(req.body).populate("from").populate("tags").exec((err, doc) => {
    if (err) {
      return res.status(500).json({
        error: err.message ? err.message : err
      })
    }
    return res.status(201).json(doc)
  })
})

module.exports = router
