module.exports = function(Waterline) {
  return Waterline.Collection.extend({
    connection: "default",
    identity: "provider",
    primaryKey: "providerId",
    attributes: {
      name: {
        type: "string",
        required: true,
        unique: true
      }
    }
  });
};
