const cors = require('cors');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cors({origin: true, credentials: true}));



app.get("/", (req, res) => {
  res.send("Hello World");
});

// Import MongoDB
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://alex:alex@cluster0-f15tz.mongodb.net/test?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  // .connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true })
  .then(() => console.log("🔥  MongoDB Connected..."))
  .catch(err => console.log(err));

//...
// Your Routes
app.use("/admin", require("./admin"));

// agent routes, db
const agents = express.Router();
const Agent = require("./models/agent.model");
const Request = require("./models/request.model");
const Conversation = require("./models/conversation.model");


// helper functions for routing algo
function get_available_agents(agent_list) {
  return agent_list.filter(agent => agent.availability);
}


function calculate_suitability(agent, request) {
  console.log("request");
  console.log(request);
  let agent_skills = agent.skill;
  // console.log(agent.skill);
  console.log("agent_skills");
  console.log(agent_skills);
  let request_skills = request.skill;
  console.log("request_skills");
  console.log(request_skills);
  console.log("request.skill");
  console.log(request.skill);
  let intersection = request_skills.filter(skill =>
    agent_skills.includes(skill)
  );
  console.log(intersection);

  return intersection.length / request_skills.length;
}

function route(request_queue, agent_list, threshold_suitability = 0.5) {
  let route_queue = [];
  while (request_queue.length > 0) {
    let available_agents = get_available_agents(agent_list);
    if (available_agents.length > 0) {
      for (let request of request_queue) {
        let suitability_ls = [];
        for (let agent of available_agents) {
          suitability_ls.push(calculate_suitability(agent, request));
        }
        let best_suitability = Math.max.apply(Math, suitability_ls);
        if (best_suitability >= threshold_suitability) {
          let agent_assigned =
            available_agents[suitability_ls.indexOf(best_suitability)];
          route_queue.push([agent_assigned, request]);
          request_queue.pop(request_queue.indexOf(request));
          agent_assigned.availability = false;
          break;
        } else {
          return route_queue;
        }
      }
    } else {
      return route_queue;
    }
  }
  return route_queue;
}

/*
----------------------------
send data to routing algo / send to Alex
----------------------------
*/

//first endpoint, retrieve all the forms
agents.route('/forms').get(function (req, res) {
  Request.find(function (err, forms) {
      if (err) {
          console.log(err);
      } else {
          //attach what we are getting from the database to the response object
          res.json(forms);
      }
  })
})

//retrieve only one specific form
agents.route('/forms/:id').get(function (req, res) {
  let id = req.params.id;
  Request.findById(id, function (err, forms) {
      res.json(forms);
  });
});

//post form
agents.route('/forms/add').post(function (req, res) {

  //add via Website
  console.log(req.body);
  let forms = new Request(req.body);
  forms.save()
      .then(forms => {
          res.status(200).json({ 'Forms': 'form added successfully' })
      })
      .catch(err => {
          res.status(400).send('Adding new form failed');
      });
})

//update post
agents.route('/forms/update/:id').post(function (req, res) {
  //retrieve the form item which needs to be updated
  Forms.findById(req.params.id, function (err, forms) {
      if (!forms){
        res.status(404).send('data not found');
      }
      else {
        forms.firstName = req.query.firstName;
        forms.lastName = req.query.lastName;
        forms.email = req.query.email;
        forms.info = req.query.info;
        forms.skill = req.query.skill;
        // forms.skillOne = req.body.skillOne;
        // forms.skillTwo = req.body.skillTwo;
        forms.save().then(Forms => {
            res.json('Forms updated');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
      }
  });
});

agents.route('/forms/:id').delete(function (req, res) {
  Request.findByIdAndRemove(
      { _id: req.params.id }
  )
      .then(function (forms) {
          res.send("Form with id " + req.params.id + " has been deleted successfully.")
      });
});

/////////////////////////////////////////////////////////////////////////////////////////////

/*
----------------------------
get data from routing algo / from Alex
----------------------------
*/

//retrieve IDs
// agents.route('/request').get(function (req, res) {
//   RainbowIDs.find(function (err, rainbowIDs) {
//       if (err) {
//           console.log(err);
//       } else {
//           //attach what we are getting from the database to the response object
//           res.json(rainbowIDs);
//       }
//   })
// })

///////////////////////////////////////////////////////////////////////////////////////////

/*
----------------------------
get all Agents
----------------------------
*/

agents.route("/").get(function(req, res) {
  Agent.find(function(err, agents) {
    if (err) {
      console.log(err);
    } else {
      //attach what we are getting from the database to the response object
      agents = get_available_agents(agents);
      for (let agent_index of agents) {
        console.log(agent_index.skill);
        console.log(agent_index.skill[0] == "1");
      }
      res.json(agents);
    }
  });
});

agents.route("/available").get(function(req, res) {
  Agent.find(function(err, agents) {
    if (err) {
      console.log(err);
    } else {
      //attach what we are getting from the database to the response object
      agents = get_available_agents(agents);
      res.json(agents);
    }
  });
});

agents.route("/request").get(function(req, res) {
  console.log("GIMME REQUEST");
  Conversation.find(function (err, rainbowIDs) {
          if (err) {
              console.log(err);
          } else {
              //attach what we are getting from the database to the response object
              res.json(rainbowIDs);
          }
  })
  // Agent.find(function(err, agents) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     //attach what we are getting from the database to the response object

  //     Request.find(function(err, request_queue) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log("Get Request object");
  //         console.log(request_queue[0]);
  //         //attach what we are getting from the database to the response object
  //         console.log(request_queue[0].skill);
  //         let agent_list = get_available_agents(agents);
  //         // let result = calculate_suitability(agents[0], request_queue[0]);
  //         // console.log(result);
  //         let result = route(request_queue, agent_list);
  //         res.json(result);
  //       }
  //     });
  //   }
  // });
});

// alice should post request object to here
// response object is {agent: rainbowId, customer: rainbowId}
agents.route("/request/add").post(function(req, res) {
  console.log("TEST:: THIS IS REQUEST TEST");
  // console.log(req.query);
  // console.log(req.body);
  let request_one = new Request(req.body);
  request_one.save();
  // console.log(request_one); 
  Agent.find(function(err, agents) {  
    if (err) {
      console.log(err);
    } else {
      let agent_list = get_available_agents(agents);
      // let result = calculate_suitability(agents[0], request_queue[0]);
      let result = route([request_one], agent_list);
      // console.log("result");
      console.log(result);
      // console.log("result[0].rainbowId");
      // console.log(result[0][0].rainbowId);

      // create guest user acc rainbow id
      let datetime = new Date();
      let year = datetime.getFullYear();
      let month = ("0" + datetime.getMonth() + 1).slice(-2); // add preceding 0, month is 0 indexed
      let date = datetime.getDate();
      let hour = datetime.getHours();
      let minute = datetime.getMinutes();
      let second = datetime.getSeconds();
      let datetime_formatted = `${year}${month}${date}${hour}${minute}${second}`;
      // define user information
      let guestEmailAccount = `${datetime_formatted}${request_one.email}`;
      let guestPassword = "bestpassworD1!$";
      let guestFirstname = `${request_one.firstName}${datetime_formatted}`;
      let guestLastname = `${request_one.lastName}${datetime_formatted}`;

      rainbowSDK.admin
        .createUserInCompany(
          guestEmailAccount,
          guestPassword,
          guestFirstname,
          guestLastname
        )
        .then(guest => {
          // Do something when the guest has been created and added to that company
          let response_object = {
            agent: result[0][0].rainbowId,
            customer: guestEmailAccount
          };
          console.log("THIS IS THE RESPONSE OBJECT AFTER ROUTING");
          console.log(response_object);
          let conversation_info = new Conversation(response_object);
          conversation_info.save();
          res.json(response_object);
        })
        .catch(err => {
          // Do something in case of error
          // ...
          console.log(`DEBUG: user failed to create`);
          return false;
        });
    }
  });
});

app.use("/agents", agents);

// start server
const PORT = 3000;
console.log(PORT);
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

module.exports.rainbowSDK = rainbowSDK;
