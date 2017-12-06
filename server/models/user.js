module.exports = Waterline => Waterline.Collection.extend({
  connection: "default",
  identity: "user",
  primaryKey: "userId",
  attributes: {
    userName: {
      type: "string",
      required: true,
      unique: true,
      index: true
    },
    passHash: {
      type: "string",
      required: true
    }
  }
});
