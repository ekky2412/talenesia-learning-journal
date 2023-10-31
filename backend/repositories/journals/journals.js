import Journal from "./models/journal-model";

export const getUserJournalRepo = async () => {
  try {
    const journals = await Journal.find();
    return journals;
  } catch (err) {
    return err;
  }
};
