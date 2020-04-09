const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Conversation = new Schema( {
  agent: { type: String, required: true },
  customer: { type: String, required: true },
});

module.exports = mongoose.model("Conversation", Conversation);
