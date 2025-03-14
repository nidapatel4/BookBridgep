// const { signup, login } = require("../Controllers/AuthController");
// const {
//   signupValidation,
//   loginValidation
// } = require("../Middlewares/AuthValidation");

// const router = require("express").Router();

// router.post("/login", loginValidation, login);
// router.post("/signup", signupValidation, signup);

// module.exports = router;
// const { signup, login, adminLogin } = require("../Controllers/AuthController"); // Import adminLogin
// const {
//   signupValidation,
//   loginValidation,
// } = require("../Middlewares/AuthValidation");

// const router = require("express").Router();

// router.post("/login", loginValidation, login); // User login
// router.post("/signup", signupValidation, signup); // User signup
// router.post("/admin/login", loginValidation, adminLogin); // Admin login

// module.exports = router;
// const { signup, login, adminLogin } = require("../Controllers/AuthController");
// const {
//   signupValidation,
//   loginValidation,
//   adminLoginValidation,
// } = require("../Middlewares/AuthValidation");

// const router = require("express").Router();

// router.post("/login", loginValidation, login);
// router.post("/signup", signupValidation, signup);

// // Admin Login Route
// router.post("/admin/login", adminLoginValidation, adminLogin);

// module.exports = router;
const { signup, login, adminLogin } = require("../Controllers/AuthController"); // Import adminLogin
const { signupValidation, loginValidation, adminLoginValidation } = require("../Middlewares/AuthValidation"); // Import admin validation

const router = require("express").Router();

// User routes
router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

// Admin routes
router.post("/admin/login", adminLoginValidation, adminLogin);

module.exports = router;

