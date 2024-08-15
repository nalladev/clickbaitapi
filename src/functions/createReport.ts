import { getCollection } from "../db/connection.js";

export default async function createReport(id: string) {
  try {
    const query = { id };
    const update = { $inc: { count: 1 } };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const { count } = await getCollection().findOneAndUpdate(
      query,
      update,
      options
    );
    return { id, count };
  } catch (error) {
    console.error(error);
  }
}
