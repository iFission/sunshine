const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Request = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  info: {
    type: String
  },
  skill: {
    type: []
  }
});

module.exports = mongoose.model("Queue", Request);
