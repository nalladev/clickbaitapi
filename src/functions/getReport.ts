import { getCollection } from "../db/connection.js";

export default async function getReport(id: string) {
  try {
    const report = await getCollection().findOne({ id });
    if (!report) return { id, count: 0 };
    return { id, count: report.count };
  } catch (error) {
    console.error(error);
  }
}
