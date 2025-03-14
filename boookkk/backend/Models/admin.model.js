// const mongoose = require("mongoose");

// const AdminSchema = new mongoose.Schema({
//   adminId: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// const Admin = mongoose.model("Admin", AdminSchema);

// module.exports = Admin;

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AdminSchema = new mongoose.Schema({
  adminId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving admin
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;
