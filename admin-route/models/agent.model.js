const mongoose = require("mongoose");
const rainbow = require("../app.js");

const Agent = mongoose.Schema({
  agentId: { type: Number, required: true },
  rainbowId: { type: mongoose.Mixed, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  availability: { type: Boolean, required: true, default: false },
  skill: { type: [] },
  email: { type: String, required: true },
  password: { type: String, required: true },

  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

Agent.pre("save", function() {
  let model_instance = this;
  model_instance.updated_at = Date.now();
  // model_instance.lastName = "modified by pre hook";

  let datetime = new Date();
  let year = datetime.getFullYear();
  let month = ("0" + datetime.getMonth() + 1).slice(-2); // add preceding 0, month is 0 indexed
  let date = datetime.getDate();
  let hour = datetime.getHours();
  let minute = datetime.getMinutes();
  let second = datetime.getSeconds();
  let datetime_formatted = `${year}${month}${date}${hour}${minute}${second}`;
  // define user information
  let userEmailAccount = `${datetime_formatted}${model_instance.email}`;
  let userPassword = `bestpassworD1!${model_instance.password}`;
  let userFirstname = `${model_instance.firstName}`;
  let userLastname = `${model_instance.lastName}`;

  console.log(this);
  return rainbow.rainbowSDK.admin
    .createUserInCompany(
      userEmailAccount,
      userPassword,
      userFirstname,
      userLastname
    )
    .then(user => {
      // Do something when the user has been created and added to that company
      console.log(`DEBUG: user created`);
      console.log(`DEBUG: ${userEmailAccount}`);
      console.log(`DEBUG: ${userPassword}`);
      console.log(`DEBUG: ${user.id}`);
      model_instance.email = userEmailAccount;
      model_instance.password = userPassword;
      model_instance.rainbowId = user.id;
      console.log(model_instance);
    })
    .catch(err => {
      // Do something in case of error
      console.log(`DEBUG: user failed to create`);
      return false;
    });
});

module.exports = mongoose.model("Agent", Agent);
