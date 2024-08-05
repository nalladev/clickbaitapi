import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export default async function initDB() {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("Database successfully connected.");
  } catch (error) {
    console.error(error);
  }
}
