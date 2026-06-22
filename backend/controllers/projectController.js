const Project = require("../models/Project");

// Create Project
const createProject = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

    console.log("Request Body:", req.body);

    const project = await Project.create({
      title,
      description,
      deadline
    });

    console.log("Saved Project:", project);

    res.status(201).json({
      message: "Project Created Successfully",
      project
    });

  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);

  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json({
      message: "Project deleted successfully"
    });

  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};



// ✏️ UPDATE PROJECT (NEW ADDED)
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json({
      message: "Project updated successfully",
      project: updatedProject
    });

  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createProject,
  getProjects,
  deleteProject,
  updateProject
};