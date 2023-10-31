import Journal from "./models/journal";

export const getUserJournalRepo = async () => {
  try {
    const journals = await Journal.find();
    return journals;
  } catch (err) {
    return err;
  }
};
