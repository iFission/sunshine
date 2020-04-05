const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

const Agent = require("./model");

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
        // We'll add this later
      }
    }
  ],
  branding: { companyName: "sunshine" }
});

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro);
