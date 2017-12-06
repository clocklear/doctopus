var DiskAdapter = require("sails-disk");

module.exports = {
  session: {
    secret: process.env.SESSION_SECRET
  },
  redis: {
    url: process.env.REDIS_STORE_URI
  },
  waterline: {
    adapters: {
      "sails-disk": DiskAdapter
    },
    connections: {
      default: {
        adapter: "sails-disk",
        inMemoryOnly: true
      }
    }
  }
};
