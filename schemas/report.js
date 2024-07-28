const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  id: String,
  count: Number,
});

module.exports = mongoose.model("Report", reportSchema);
