// const mongoose = require("mongoose");

// const mongo_url = process.env.MONGO_CONN;

// mongoose
//   .connect(mongo_url)
//   .then(() => {
//     console.log("Connection Successfull");
//   })
//   .catch((err) => {
//     console.log("Connection Failed: ", err);
//   });
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
