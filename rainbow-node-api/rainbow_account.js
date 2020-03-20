let rainbowSDK = require("./rainbow.js");

// define user information
let userEmailAccount = "alex202003201427@myCompany.com";
let userPassword = "bestpassworD1!";
let userFirstname = "alex";
let userLastname = "202003201427";

// Start the SDK
console.log("DEBUG: starting services");
rainbowSDK.start().then(() => {
  // Do something when the SDK is connected to Rainbow
  console.log("DEBUG: services started");

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
    })
    .catch(err => {
      // Do something in case of error
      console.log(`DEBUG: user failed to create`);
    });
});
