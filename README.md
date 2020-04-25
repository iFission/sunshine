
# Sunshine Rainbow Platform

|![](https://i.imgur.com/zKrlMcx.jpg)    |
| ---------------|
|![](https://i.imgur.com/UT5dMfl.png)    |

Demo implementation of Rainbow SDK with the following:
1. A web page simulating customer's website where their users can request for support via chat.
2. A routing engine that routes incoming chat and audio call requests to the right agent based on agent availability, skills.

## Quick start

Refining Agent Skills using the filter - Manual Testing
The first level of filter consists of four main topic enquiries each of which contains sub-topic enquiries. Each agent has one of the 9 skills as listed in the diagram below. We conduct manual checking to make sure the customer can navigate through the filter and easily make changes to his search.

1) Git clone the project
```bash
git clone https://github.com/Etzernal/sunshine
```

2) Go to the root directory of the project
```bash
cd sunshine
```
3) To start the website server (from root directory)
```bash
cd website
npm install
npm start
```
- visit [localhost:3001](localhost:3001)

3) To start the backend server (from root directory)
```bash
cd admin-route
npm install
node app.js
```
4) To start the chat server (from root directory)
```bash
cd chat-angular
npm install
node npm start
```
Note: To install any new dependencies, use ```npm install``` to do so in the root directory. 

Description
-
### Frontend Website

**Website:** [localhost:3001](localhost:3001)

The website simulates a travel agency providing different types of tour packages. 

**Main Feature**

1. Navigate as below to access the "refine agent skills" feature. This feature allows the user to find the most suitable agent for his inquiry. 

| Home -> Contact -> Go To Live Chat |
| ---------------------------------- |


2. After the user refines his search, he inputs his personal details in the form and click **Connect**. 
3. The user is directed to the **Live Chat** channel.

##### Endpoint: Port 3001

### Frontend Chat Server for Customer

This server makes use of the Rainbow SDK and enables the end users of the client's website to be able to chat with the agents after selecting which department's agents they want to talk to. 

This chat service is modular, allowing webpage clients set u the service from the chat server for the chat popup easily, with 2 preconditions: 
1) The webpage clients will have to POST a query message consisting of a Response object to the backend server.
2) The webpage clients will have to start the chat server. 

##### Endpoint: Port 300

### Backend Chat Server for Agent
**Server:** [localhost:400](localhost:400)

Makes use of **MERN stack** (MongoDB, Express, React, Node) to create a server as a middleman for the Frontend Chat Server for Customer and the Backend Admin. 

**How it works**
1. When user submits a form, the user information and his agent request is posted to `http://localhost:3000/agents/request/add` via axios to the backend admin.
2. The backend admin returns a pair of IDs - the user's and agent's rainbowIDs.
3. This pair of rainbowIDs is collected by the Frontend Chat Server, creating a user login to the chat room and connecting the chat between the user and the agent.

##### Endpoint: Port 400

### Backend Admin Dashboard and Routing Engine
#### Admin Dashboard: [localhost:3000/admin](localhost:3000/admin)
Makes use of [admin-bro](https://github.com/SoftwareBrothers/admin-bro) as the modern front-end to manage mongodb database. Able to create/update/view various data classes.

#### Algorithm
Maintains a global queue of customers waiting to be served by agents. Each customer sends a request containing his query type (associated with skillsets). Upon receiving a new request, the algorithm queries for a list of agents, then filter by their availability, finally matching the customer with the agent that is most qualified based on their skillset match.

##### Endpoint: Port 3000

| Endpoint | Method   | Request  | Response |
| -------- | -------- | -------- | --- |
| `request/add`     | `POST`     |`{firstName: String, lastName: String, email: String, info: String, skill: [Array: String]}`|    `{agent: rainbowId, customer: rainbowId}`      |

###### tags: `NodeJS` `React` `Angular` `MongoDB` `Chat` `Documentation` `Customer Support`
