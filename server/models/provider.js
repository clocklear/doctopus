module.exports = Waterline => Waterline.Collection.extend({
  connection: "default",
  identity: "provider",
  attributes: {
    name: {
      type: "string",
      required: true,
      unique: true
    }
  }
})
