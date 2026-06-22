import "./Dashboard.css";
import { useEffect, useState } from "react";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await fetch(
        "https://project-management-backend-d8uv.onrender.com/api/projects"
      );

      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={fetchProjects}>Refresh</button>

      <div className="container">
        {projects.length === 0 ? (
          <p>No Projects Found</p>
        ) : (
          projects.map((p) => (
            <div className="card" key={p._id}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p>
                Deadline: {new Date(p.deadline).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;