import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
import selfPing from "./functions/selfPing.js";
import getReport from "./functions/getReport.js";
import getReports from "./functions/getReports.js";
import createReport from "./functions/createReport.js";
import { connectDB } from "./db/connection.js";

dotenv.config(); 

const app = express();

// app.use(cors({ origin: "https://www.youtube.com" }));
app.use(express.json());

const port = process.env.PORT || 3000;

//initialising mongodb
connectDB().then(() => {
  app.listen(port, () => console.log(`Server started on port ${port}.`));
});

//routes
app.get("/", async (req, res) => {
  res.send("routes: /reports/{id}");
});

app.post("/reports/", async (req, res) => {
  res.json(await getReports(req.body.videoIds));
});

app.get("/reports/:id", async (req, res) => {
  res.json(await getReport(req.params.id));
});

app.post("/reports/:id", async (req, res) => {
  res.json(await createReport(req.params.id));
});

//self pinging service to keep active
setInterval(selfPing, 1000 * 60 * 14);

export default app;
