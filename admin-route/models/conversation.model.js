const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Request = new Schema({
  agent: {
    type: String
  },
  customer: {
    type: String
  }
});

module.exports = mongoose.model("Queue", Request);
