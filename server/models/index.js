var fs = require('fs');
var path = require('path');
var Waterline = require('waterline');
var config = require('config');
var debug = require('debug')('doctopus:models');

function ORM(){

  Object.defineProperties(this, {
    orm: {
      value: new Waterline()
    }
  });

}

ORM.prototype.setup = function setup(){
  var _this = this;

  // return a promise
  return new Promise(function promise(resolve, reject) {
    // define models directory
    var dir = __dirname;

    // read in models
    fs.readdir(dir, function(err, files) {
      if(err){
        return reject(err);
      }

      // read models
      files.forEach(function loadCollections(file){
        if(file[0] !== '.' && file != 'index.js'){
          var modPath = path.join(dir, file);
          debug("loading model: " + modPath);
          _this.orm.loadCollection(require(modPath)(Waterline));
        }
      });

      // start orm
      _this.orm.initialize(config.get('waterline'), function initialized(err, models) {
        if(err){
          debug(err);
          return reject(err);
        }

        // store creations
        _this.models = models.collections;
        _this.datastores = models.datastores;

        // return model names
        resolve(Object.keys(_this.models));
      });

    });

  });

};

var orm = new ORM();
orm.setup();

module.exports = orm;