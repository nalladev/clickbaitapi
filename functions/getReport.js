const Report = require("../schemas/report");

async function getReport(id) {
  try {
    const report = await Report.findOne({ id });
    return report || { id, count: 0 };
  } catch (error) {
    console.log("Error: ", error);
  }
}

module.exports = getReport;
