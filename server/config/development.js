const path = require("path");
const DiskAdapter = require("sails-disk");

module.exports = {
  session: {
    secret: "SuperDevelopmentSecret!"
  },
  redis: {
    url: "redis://localhost"
  }
};
