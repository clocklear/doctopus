const fs = require("fs")
const path = require("path")
const Waterline = require("waterline")
const config = require("config")
const debug = require("debug")("doctopus:models")

class ORM {
  constructor() {

    Object.defineProperties(this, {
      orm: {
        value: new Waterline()
      }
    })

  }

  setup() {
    const _this = this

    // return a promise
    return new Promise(function promise(resolve, reject) {
      // define models directory
      const dir = __dirname

      // read in models
      fs.readdir(dir, (err, files) => {
        if(err){
          return reject(err)
        }

        // read models
        files.forEach(function loadCollections(file){
          if(file[0] !== "." && file != "index.js"){
            const modPath = path.join(dir, file)
            debug(`loading model: ${modPath}`)
            _this.orm.loadCollection(require(modPath)(Waterline))
          }
        })

        // start orm
        _this.orm.initialize(config.get("waterline"), function initialized(err, models) {
          if(err){
            debug(err)
            return reject(err)
          }

          // store creations
          _this.models = models.collections
          _this.datastores = models.datastores

          // return model names
          resolve(Object.keys(_this.models))
        })

      })

    })

  }
}

const orm = new ORM()
orm.setup()

module.exports = orm