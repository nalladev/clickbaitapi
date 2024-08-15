import { getCollection } from "../db/connection.js";

export default async function getReports(videoIds: string[]) {
  try {
    const reports = await getCollection().find({ id: { $in: videoIds } });
    return reports.map(({ id, count }) => ({ id, count }));
  } catch (error) {
    console.error(error);
  }
}
