module.exports = Waterline => Waterline.Collection.extend({
  connection: "default",
  identity: "document",
  primaryKey: "documentId",
  attributes: {
    documentId: {
      type: "number"
    },
    filePath: {
      type: "string",
      required: true
    },
    fileType: {
      type: "string",
      required: true
    },
    name: {
      type: "string",
      required: true
    },
    from: {
      model: "provider"
    },
    receiveDate: {
      type: "date"
    },
    tags: {
      collection: "tag",
      via: "documents"
    }
  }
});
