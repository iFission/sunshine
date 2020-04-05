const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

const Agent = require("./models/agent.model");
const Request = require("./models/request.model");

AdminBro.registerAdapter(AdminBroMongoose);

const contentParent = {
  name: "Admin stuff",
  icon: "Events"
};

const adminBro = new AdminBro({
  rootPath: "/admin",
  resources: [
    {
      resource: Agent,
      options: {
        parent: contentParent
      }
    },
    {
      resource: Request,
      options: {
        parent: contentParent
      }
    }
  ],
  branding: { companyName: "sunshine" }
});

module.exports = AdminBroExpress.buildRouter(adminBro);
