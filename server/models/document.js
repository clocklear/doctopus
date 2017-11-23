var uuid = require('uuid');

module.exports = {
  attributes: {
    docId: {
      type: 'string',
      primaryKey: true,
      required: true,
      defaultsTo: function() {
        return uuid.v4()
      }
    },
    filePath: {
      type: 'string',
      required: true
    },
    fileType: {
      type: 'string',
      enum: ['pdf'],
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    from: {
      model: 'provider'
    },
    receiveDate: {
      type: 'date'
    },
    tags: {
      collection: 'tag',
      via: 'documents'
    }
  }
}