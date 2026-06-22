const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server running");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(5000, () => console.log("Server running on 5000"));
  } catch (err) {
    console.log(err);
  }
};

startServer();