import Journal from "./models/journal-model.js";
import Tugas from "./models/tugas-model.js";

export const getJournalTheme = async (noTema) => {
  try {
    const journal = await Journal.find({ noTema: noTema });
    return journal;
  } catch (err) {
    return err;
  }
};

export const getUserJournalRepo = async (username) => {
  try {
    const journals = await Journal.find({ username: username });
    return journals;
  } catch (err) {
    return err;
  }
};

export const getUserJournalThemeByRepo = async (username, theme) => {
  try {
    const journals = await Journal.find({ username: username, noTema: theme });
    return journals;
  } catch (err) {
    return err;
  }
};

export const getUserJournalThemeSectionByRepo = async (
  username,
  theme,
  section
) => {
  try {
    const journals = await Journal.find({
      username: username,
      noTema: theme,
      noSoal: section,
    });
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
    const journalToSave = await Journal.findOneAndUpdate(
      { username: username, noTema: theme, noSoal: section },
      { tipeSoal, jawaban },
      { upsert: true, new: true }
    );
    return journalToSave;
  } catch (err) {
    return err;
  }
};

export const getUserJournalPantauThemeByRepo = async (username, theme) => {
  try {
    const journal = await Tugas.find({ username: username, noTema: theme });
    return journal;
  } catch (err) {
    return err;
  }
};

export const addTugasByRepo = async (
  theme,
  tugas,
  sedangDikerjakan,
  sudahDikumpulkan,
  masukan,
  username
) => {
  try {
    const tugasToSave = await Tugas.findOneAndUpdate(
      { username: username, noTema: theme, noTugas: tugas },
      { sedangDikerjakan, sudahDikumpulkan, masukan },
      { upsert: true, new: true }
    );
    return tugasToSave;
  } catch (err) {
    return err;
  }
};

export const getSectionOneDistinctRepo = async (noTema) => {
  try {
    const section = await Tugas.find({ noTema }).distinct("username");
    return section;
  } catch (err) {
    return err;
  }
};
