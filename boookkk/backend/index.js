// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv").config();
// require("./Models/db");
// const AuthRouter = require("./Routes/AuthRouter");
// const AdminRoutes = require("./Routes/AdminRoutes");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 8080;

// app.get("/ping", (req, res) => {
//   res.send("PONG");
// });

// app.use(express.json());
// app.use(cors());
// app.use("/auth", AuthRouter);
// app.use("/admin", AdminRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./Models/db"); // Import the MongoDB connection function
require("dotenv").config();
const AuthRouter = require("./Routes/AuthRouter");

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Routes
app.use("/auth", AuthRouter); // No need for AdminRoutes anymore

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

