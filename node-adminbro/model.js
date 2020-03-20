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

// Update the updated_at field on save
agentSchema.pre("save", next => {
  this.updated_at = Date.now();
  next();
});

module.exports = Agent = mongoose.model("Agent", agentSchema);
