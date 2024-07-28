const Report = require("../schemas/report");

async function getReports(videoIds) {
  try {
    const reports = await Report.find({ id: { $in: videoIds } });
    videoIds.forEach((id) => {
      if (!reports.map((item) => item.id).includes(id)) {
        reports.push({ id, count: 0 });
      }
    });
    return reports;
  } catch (error) {
    console.log("Error: ", error);
  }
}

module.exports = getReports;
