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

// get all agents

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
  Agent.find(function(err, agents) {
    if (err) {
      console.log(err);
    } else {
      //attach what we are getting from the database to the response object

      Request.find(function(err, request_queue) {
        if (err) {
          console.log(err);
        } else {
          //attach what we are getting from the database to the response object

          console.log(request_queue[0].skill);

          let agent_list = get_available_agents(agents);
          // let result = calculate_suitability(agents[0], request_queue[0]);
          // console.log(result);
          let result = route(request_queue, agent_list);
          res.json(result);
        }
      });
    }
  });
});
app.use("/agents", agents);

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
// rainbowSDK.start();

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
