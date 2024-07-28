const Report = require("../schemas/report");

async function getReports(videoIds) {
  try {
    const reports = await Report.find({ id: { $in: videoIds } });
    return reports;
  } catch (error) {
    console.log("Error: ", error);
  }
}

module.exports = getReports;
