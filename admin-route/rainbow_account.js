// let create_agent_account = require("./rainbow");
const create_agent_account = require("./app.js");

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

create_agent_account(
  userEmailAccount,
  userPassword,
  userFirstname,
  userLastname
);
