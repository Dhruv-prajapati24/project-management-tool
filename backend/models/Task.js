const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  assignedTo: {
    type: String
  },

  deadline: {
    type: Date
  },

  status: {
    type: String,
    default: "Pending"
  },

  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }

});

module.exports = mongoose.model("Task", taskSchema);