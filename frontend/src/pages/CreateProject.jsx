import "./CreateProject.css";
import { useState } from "react";
import "./CreateProject.css";

function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://project-management-backend-d8uv.onrender.com/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            description,
            deadline
          })
        }
      );

      alert("Project Created Successfully");

      setTitle("");
      setDescription("");
      setDeadline("");

      // Dashboard par wapas bhej do
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      alert("Error creating project");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Create Project</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;