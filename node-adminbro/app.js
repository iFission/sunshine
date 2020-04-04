const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Import MongoDB
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://alex:alex@cluster0-f15tz.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  // .connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true })
  .then(() => console.log("🔥  MongoDB Connected..."))
  .catch(err => console.log(err));

//...
// Your Routes
app.use("/admin", require("./admin"));

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🔥  Server started on PORT: ${PORT}`);
});

// rainbow sdk
// Load the SDK
let RainbowSDK = require("rainbow-node-sdk");

// load configuration
let options = require("./config/rainbow_config");

// Instantiate the SDK
let rainbowSDK = new RainbowSDK(options);

// Start the SDK
rainbowSDK.start();

// add listeners
rainbowSDK.events.on("rainbow_onstarted", function() {
  // do something when the SDK is connected to Rainbow
  console.log("rainbow_onstarted");
});
rainbowSDK.events.on("rainbow_onready", function() {
  // do something when the SDK is connected to Rainbow
  console.log("rainbow_onready");
});

rainbowSDK.events.on("rainbow_stopped", function() {
  console.log("rainbow_stopped");
});

rainbowSDK.events.on("rainbow_onerror", function(err) {
  // do something when something goes wrong
  console.log("rainbow_onerror");
});

module.exports.create_agent_account = function create_agent_account(
  userEmailAccount,
  userPassword,
  userFirstname,
  userLastname
) {
  rainbowSDK.admin
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
      return user.id;
    })
    .catch(err => {
      // Do something in case of error
      console.log(`DEBUG: user failed to create`);
      return false;
    });
};
