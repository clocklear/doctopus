var uuid = require('uuid');

module.exports = {
  attributes: {
    providerId: {
      type: 'string',
      primaryKey: true,
      required: true,
      defaultsTo: function() {
        return uuid.v4()
      }
    },
    name: {
      type: 'string',
      required: true,
      unique: true
    },
  }
}