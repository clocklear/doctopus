module.exports = function(Waterline) {
  return Waterline.Collection.extend({
    connection: "default",
    identity: "tag",
    primaryKey: "tagId",
    attributes: {
      tagName: {
        type: "string",
        required: true,
        unique: true
      },
      documents: {
        collection: "document",
        via: "tags"
      }
    }
  });
};
