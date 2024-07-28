const mongoose = require("mongoose");
require("dotenv").config();

async function initDB() {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("Database successfully connected.");
  } catch (error) {
    console.error(error);
  }
}

module.exports = initDB;
