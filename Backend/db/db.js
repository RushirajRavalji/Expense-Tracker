const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.URL);
    console.log("DB_Connected");
  } catch (error) {
    console.log("DB_Connection_Error", error.message);
  }
};

module.exports = { db };
