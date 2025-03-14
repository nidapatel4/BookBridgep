const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const Admin = require("../Models/admin.model");
console.log("MONGO_CONN:", process.env.MONGO_CONN); // Debugging line

const mongo_url = process.env.MONGO_CONN;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create an Admin
const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const newAdmin = new Admin({
    adminId: "admin123",
    password: hashedPassword,
  });

  await newAdmin.save();
  console.log("✅ Admin created successfully");
  

  mongoose.connection.close();
};

createAdmin();
