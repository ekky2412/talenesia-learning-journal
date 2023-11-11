import Journal from "./models/journal-model.js";

export const getUserJournalRepo = async (username) => {
  try {
    const journals = await Journal.find({ name: username });
    return journals;
  } catch (err) {
    return err;
  }
};
