import Report from "../schemas/report.js";

export default async function createReport(id) {
  try {
    const query = { id };
    const update = { $inc: { count: 1 } };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const report = await Report.findOneAndUpdate(query, update, options);
    return report;
  } catch (error) {
    console.log("Error: ", error);
  }
}
