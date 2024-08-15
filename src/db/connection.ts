import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { Report } from "../types/report.js";
import { collectionName, dbName } from "../constants/db.js";

dotenv.config();
const client = new MongoClient(process.env.MONGODBURI);

export async function connectDB() {
  try {
    await client.connect();
    // Ping to check connection
    await client.db(dbName).command({ ping: 1 });
    console.log("Connected to Database.");
  } catch (error) {
    console.error(error);
    await client.close();
  }
}

export function getCollection() {
  return client.db(dbName).collection<Report>(collectionName);
}
