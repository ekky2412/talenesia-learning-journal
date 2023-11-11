import Journal from "./models/journal-model.js";

export const getUserJournalRepo = async (username) => {
  try {
    const journals = await Journal.find({ name: username });
    return journals;
  } catch (err) {
    return err;
  }
};

export const addJournalByRepo = async (
  theme,
  section,
  tipeSoal,
  jawaban,
  username
) => {
  try {
    const journalToSave = new Journal({
      noTema: theme,
      noSoal: section,
      tipeSoal,
      jawaban,
      username,
    });
    const saveJournal = await journalToSave.save();
    return saveJournal;
  } catch (err) {
    return err;
  }
};
