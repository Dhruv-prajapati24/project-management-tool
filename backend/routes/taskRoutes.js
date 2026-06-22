const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks
} = require("../controllers/taskController");

// Create Task
router.post("/", createTask);

// Get All Tasks
router.get("/", getTasks);

module.exports = router;