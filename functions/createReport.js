const Report = require("../schemas/report");

async function createReport(id) {
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

module.exports = createReport;
