const express = require("express");
const app = express();
require("dotenv").config();
const selfPing = require("./functions/selfPing");
const getReport = require("./functions/getReport");
const createReport = require("./functions/createReport");

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server ready on port ${port}.`));

app.get("/", async (req, res) => {
  res.send("routes: /reports/{id}");
});

app.get("/reports/:id", async (req, res) => {
  res.json(await getReport(req.params.id));
});

app.post("/reports/:id", async (req, res) => {
  res.json(await createReport(req.params.id));
});

setInterval(selfPing, 1000 * 60 * 14);

module.exports = app;
