const mongoose = require("mongoose");
const rainbow = require("./app.js");

const agentSchema = mongoose.Schema({
  agentId: { type: Number, required: true },
  rainbowId: { type: mongoose.Mixed, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  availability: { type: Boolean, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },

  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

agentSchema.pre("save", function(next) {
  this.updated_at = Date.now();
  this.lastName = "modified by pre hook";

  let datetime = new Date();
  let year = datetime.getFullYear();
  let month = ("0" + datetime.getMonth() + 1).slice(-2); // add preceding 0, month is 0 indexed
  let date = datetime.getDate();
  let hour = datetime.getHours();
  let minute = datetime.getMinutes();
  let datetime_formatted = `${year}${month}${date}${hour}${minute}`;
  // define user information
  let userEmailAccount = `alex${datetime_formatted}@myCompany.com`;
  let userPassword = "bestpassworD1!";
  let userFirstname = "alex";
  let userLastname = datetime_formatted;

  this.rainbowId = rainbow.create_agent_account(
    userEmailAccount,
    userPassword,
    userFirstname,
    userLastname
  );
  console.log(this);
  next();
});

module.exports = Agent = mongoose.model("Agent", agentSchema);
