var path = require("path");
var DiskAdapter = require("sails-disk");

module.exports = {
  session: {
    secret: "SuperDevelopmentSecret!"
  },
  redis: {
    url: "redis://localhost"
  }
};
