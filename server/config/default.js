module.exports = {
  "session": {
    "secret": process.env.SESSION_SECRET
  },
  "redis": {
    "url": process.env.REDIS_STORE_URI
  }
};