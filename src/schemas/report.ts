import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  id: String,
  count: { type: Number, default: 0 },
});

export default mongoose.model("Report", reportSchema);
