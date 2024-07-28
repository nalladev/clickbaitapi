const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  id: String,
  count: { type: Number, default: 0 },
});

module.exports = mongoose.model("Report", reportSchema);
