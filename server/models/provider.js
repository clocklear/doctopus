module.exports = Waterline => Waterline.Collection.extend({
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
