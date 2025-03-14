// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const UserModel = require("../Models/User");

// //User signup
// const signup = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const user = await UserModel.findOne({ email });
//     if (user) {
//       return res
//         .status(409)
//         .json({ message: "User already exists", success: false });
//     }
//     //create a new user with hashed password
//     const userModel = new UserModel({ name, email, password });
//     userModel.password = await bcrypt.hash(password, 10);
//     await userModel.save();
//     res.status(201).json({ message: "SignUp Success", success: true });
//   } catch (err) {
//     res.status(500).json({ message: "SignUp Failed", success: false });
//   }
// };
// //user login

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await UserModel.findOne({ email });
//     const errorMsg = "Auth failed email or password is wrong ";
//     if (!user) {
//       return res.status(403).json({ message: errorMsg, success: false });
//     }
//     const isPassword = await bcrypt.compare(password, user.password);
//     if (!isPassword) {
//       return res.status(403).json({ message: errorMsg, success: false });
//     }
//     //Generate JWT Token
//     const jwtToken = jwt.sign(
//       {
//         email: user.email,
//         _id: user._id,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "24h" }
//     );
//     res.status(200).json({
//       message: "Login Success",
//       success: true,
//       jwtToken,
//       email,
//       name: user.name,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Login Failed", success: false });
//   }
// };
// module.exports = { signup, login };
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const UserModel = require("../Models/User");

// // User Signup
// const signup = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body; // Role added
//     const user = await UserModel.findOne({ email });
//     if (user) {
//       return res
//         .status(409)
//         .json({ message: "User already exists", success: false });
//     }

//     // Create a new user with hashed password
//     const userModel = new UserModel({ name, email, password, role });
//     userModel.password = await bcrypt.hash(password, 10);
//     await userModel.save();

//     res.status(201).json({ message: "SignUp Success", success: true });
//   } catch (err) {
//     res.status(500).json({ message: "SignUp Failed", success: false });
//   }
// };

// // User Login
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await UserModel.findOne({ email });
//     const errorMsg = "Auth failed: email or password is wrong";

//     if (!user) {
//       return res.status(403).json({ message: errorMsg, success: false });
//     }

//     const isPassword = await bcrypt.compare(password, user.password);
//     if (!isPassword) {
//       return res.status(403).json({ message: errorMsg, success: false });
//     }

//     // Generate JWT Token
//     const jwtToken = jwt.sign(
//       {
//         email: user.email,
//         _id: user._id,
//         role: user.role, // Store role in token
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "24h" }
//     );

//     res.status(200).json({
//       message: "Login Success",
//       success: true,
//       jwtToken,
//       email,
//       name: user.name,
//       role: user.role,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Login Failed", success: false });
//   }
// };

// // Admin Login
// const adminLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find user by email
//     const admin = await UserModel.findOne({ email });

//     if (!admin) {
//       return res.status(404).json({ message: "Admin not found", success: false });
//     }

//     // Ensure the user is an admin
//     if (admin.role !== "admin") {
//       return res.status(403).json({ message: "Access Denied: Not an Admin", success: false });
//     }

//     // Compare passwords
//     const isPasswordValid = await bcrypt.compare(password, admin.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid Credentials", success: false });
//     }

//     // Generate JWT Token
//     const jwtToken = jwt.sign(
//       {
//         email: admin.email,
//         _id: admin._id,
//         role: admin.role,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "24h" }
//     );

//     res.status(200).json({
//       message: "Admin Login Successful",
//       success: true,
//       jwtToken,
//       email,
//       name: admin.name,
//       role: admin.role,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Admin Login Failed", success: false });
//   }
// };

// module.exports = { signup, login, adminLogin };

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User");
const AdminModel = require("../Models/admin.model"); // Import Admin model

// User Signup
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists", success: false });
    }
    const userModel = new UserModel({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({ message: "SignUp Success", success: true });
  } catch (err) {
    res.status(500).json({ message: "SignUp Failed", success: false });
  }
};

// User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errorMsg = "Auth failed: Email or password is incorrect";
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.status(200).json({
      message: "User Login Success",
      success: true,
      jwtToken,
      email,
      name: user.name,
      role: "user",
    });
  } catch (err) {
    res.status(500).json({ message: "User Login Failed", success: false });
  }
};

// Admin Login
// const adminLogin = async (req, res) => {
//   try {
//     const { adminId, password } = req.body;
//     const admin = await AdminModel.findOne({ adminId });
//     const errorMsg = "Auth failed: Admin ID or password is incorrect";
//     if (!admin) {
//       return res.status(403).json({ message: errorMsg, success: false });
//     }
//     const isPassword = await bcrypt.compare(password, admin.password);
//     if (!isPassword) {
//       return res.status(403).json({ message: errorMsg, success: false });
//     }
//     const jwtToken = jwt.sign(
//       { adminId: admin.adminId, _id: admin._id, role: "admin" },
//       process.env.JWT_SECRET,
//       { expiresIn: "24h" }
//     );
//     res.status(200).json({
//       message: "Admin Login Success",
//       success: true,
//       jwtToken,
//       adminId,
//       role: "admin",
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Admin Login Failed", success: false });
//   }
// };

// module.exports = { signup, login, adminLogin };
const adminLogin = async (req, res) => {
  try {
    const { adminId, password } = req.body;
    console.log("🔍 Login Attempt for:", adminId, "with password:", password);

    const admin = await AdminModel.findOne({ adminId });
    console.log("🔍 Found Admin in DB:", admin);

    const errorMsg = "Auth failed: Admin ID or password is incorrect";
    if (!admin) {
      console.log("❌ Admin not found in DB!");
      return res.status(403).json({ message: errorMsg, success: false });
    }

    console.log("🔍 Comparing passwords:", password, "vs", admin.password);
    const isPassword = await bcrypt.compare(password, admin.password);
    console.log("🔍 Password match result:", isPassword);

    if (!isPassword) {
      console.log("❌ Password mismatch!");
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const jwtToken = jwt.sign(
      { adminId: admin.adminId, _id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    console.log("✅ Admin Login Success!");

    res.status(200).json({
      message: "Admin Login Success",
      success: true,
      jwtToken,
      adminId,
      role: "admin",
    });
  } catch (err) {
    console.error("❌ Admin Login Error:", err);
    res.status(500).json({ message: "Admin Login Failed", success: false });
  }
};
module.exports = { signup, login, adminLogin };
