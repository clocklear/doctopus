var uuid = require('uuid');

module.exports = {
  attributes: {
    tagId: {
      type: 'string',
      primaryKey: true,
      required: true,
      defaultsTo: function() {
        return uuid.v4()
      }
    },
    tagName: {
      type: 'string',
      required: true,
      unique: true
    },
    documents: {
      collection: 'document',
      via: 'tags'
    }
  }
}