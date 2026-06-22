const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  deleteProject
} = require("../controllers/projectController");

// Create Project
router.post("/", createProject);

// Get All Projects
router.get("/", getProjects);

// Delete Project
router.delete("/:id", deleteProject);

module.exports = router;