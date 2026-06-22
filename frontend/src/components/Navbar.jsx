import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      padding: "15px",
      background: "#1e1e2f",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      
      <h2 style={{ margin: 0 }}>Project Tool</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">Dashboard</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/create-project">Create</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/login">Login</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/register">Register</Link>
      </div>

    </div>
  );
}

export default Navbar;