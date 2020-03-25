const mongoose = require("mongoose");

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

agentSchema.plugin(require("mongoose-lifecycle"));

agentSchema.on("beforeSave", agent => console.log(agent.password));

module.exports = Agent = mongoose.model("Agent", agentSchema);
