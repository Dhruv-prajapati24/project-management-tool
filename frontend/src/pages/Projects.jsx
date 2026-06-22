import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/projects");
      const data = await response.json();

      setProjects(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Projects</h2>

      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((project) => (
          <div
            key={project._id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px"
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Deadline: {project.deadline}</p>
            <p>Status: {project.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;