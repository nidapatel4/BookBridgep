// const Joi = require('joi');
// const joi = require('joi');

// const signupValidation = (req, res, next) => {
//   const schema = Joi.object({
//     name: Joi.string().min(1).max(100).required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(4).max(100).required(),
//   });
//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: 'Bad Request', error });
//   }
//   next();
// };

// const loginValidation = (req, res, next) => {
//   const schema = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().min(4).max(100).required(),
//   });
//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: 'Bad Request', error });
//   }
//   next();
// };

// module.exports = { loginValidation, signupValidation };
// const Joi = require('joi');

// const signupValidation = (req, res, next) => {
//   const schema = Joi.object({
//     name: Joi.string().min(1).max(100).required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(4).max(100).required(),
//   });
//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: 'Bad Request', error });
//   }
//   next();
// };

// const loginValidation = (req, res, next) => {
//   const schema = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().min(4).max(100).required(),
//   });
//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: 'Bad Request', error });
//   }
//   next();
// };

// // Admin Login Validation (Admin ID & Password)
// const adminLoginValidation = (req, res, next) => {
//   const schema = Joi.object({
//     adminId: Joi.string().required(),
//     password: Joi.string().min(4).max(100).required(),
//   });
//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: 'Bad Request', error });
//   }
//   next();
// };

// module.exports = { loginValidation, signupValidation, adminLoginValidation };
const Joi = require('joi');

// Validation for user signup
const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Bad Request', error });
  }
  next();
};

// Validation for user login
const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Bad Request', error });
  }
  next();
};

// Validation for admin login
const adminLoginValidation = (req, res, next) => {
  const schema = Joi.object({
    adminId: Joi.string().required(), // Admin ID should be required
    password: Joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Bad Request', error });
  }
  next();
};

module.exports = { loginValidation, signupValidation, adminLoginValidation };
