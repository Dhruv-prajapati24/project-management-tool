import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h1>Project Dashboard</h1>

      <div className="container">
        {projects.length === 0 ? (
          <p>No Projects Found</p>
        ) : (
          projects.map((p) => (
            <div className="card" key={p._id}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p className="deadline">{p.deadline}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;