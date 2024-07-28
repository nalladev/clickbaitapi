const express = require("express");
const app = express();
require("dotenv").config();
const selfPing = require("./functions/selfPing");

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server ready on port ${port}.`));

app.get("/", (req, res) => {
  res.status(200).send({
    connected: true,
  });
});

setInterval(selfPing, 1000 * 60 * 14)

module.exports = app;
