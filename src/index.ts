import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import initDB from "./functions/initDB.js";
import selfPing from "./functions/selfPing.js";
import getReport from "./functions/getReport.js";
import getReports from "./functions/getReports.js";
import createReport from "./functions/createReport.js";

dotenv.config()

const app = express();
app.use(cors({ origin: "https://www.youtube.com" }));
app.use(express.json());

const port = process.env.PORT || 3000;

//initialising mongodb
initDB().then(() => {
  //starting server
  app.listen(port, () => console.log(`Server ready on port ${port}.`));
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
