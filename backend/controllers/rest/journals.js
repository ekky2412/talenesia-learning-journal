import {
  getUserJournalByUsecase,
  addUserJournalThemeSectionByUsecase,
  getUserJournalPantauThemeByUsecase,
  addUserJournalPantauThemeByUsecase,
  getUserJournalThemeByUsecase,
  getUserJournalThemeSectionByUsecase,
} from "../../usecases/journals/journals.js";

export const getUserJournal = async (req, res) => {
  const { username } = req.params;
  const journals = await getUserJournalByUsecase(username);

  if (!journals) {
    return res.status(404).json({
      message: "User Journal not exists!",
    });
  }

  // let newUsers = [];

  // users.newUsers.forEach((p, i = 0) => {
  //   newUsers[i] = p;
  //   i++;
  // });

  res.json(journals);
};

export const getUserJournalPantauTheme = async (req, res) => {
  const { username, theme } = req.params;
  const journals = await getUserJournalPantauThemeByUsecase(username, theme);

  if (!journals) {
    return res.status(404).json({
      message: "User Journal not exists!",
    });
  }
  res.json(journals);
};

export const addUserJournalPantauTheme = async (req, res) => {
  const { username, theme } = req.params;
  const { noTugas, sedangDikerjakan, sudahDikumpulkan, masukan } = req.body;

  try {
    const journalToAdd = await addUserJournalPantauThemeByUsecase(
      username,
      theme,
      noTugas,
      sedangDikerjakan,
      sudahDikumpulkan,
      masukan
    );
    console.log(journalToAdd);
    res.status(200).json({
      username: journalToAdd.username,
      theme: journalToAdd.theme,
      noTugas: journalToAdd.noTugas,
      sedangDikerjakan: journalToAdd.sedangDikerjakan,
      sudahDikumpulkan: journalToAdd.sudahDikumpulkan,
      masukan: journalToAdd.masukan,
      message: `Answer successfully added!`,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const getUserJournalTheme = async (req, res) => {
  const { username, theme } = req.params;
  const journals = await getUserJournalThemeByUsecase(username, theme);
  if (!journals) {
    return res.status(404).json({
      message: "User Journal not exists!",
    });
  }
  res.json(journals);
};

export const getUserJournalThemeSection = async (req, res) => {
  const { username, theme, section } = req.params;
  const journals = await getUserJournalThemeSectionByUsecase(
    username,
    theme,
    section
  );
  if (!journals) {
    return res.status(404).json({
      message: "User Journal not exists!",
    });
  }
  res.json(journals);
};

export const addUserJournalThemeSection = async (req, res) => {
  const { username, theme, section } = req.params;
  const { tipeSoal, jawaban } = req.body;

  try {
    const addJournal = await addUserJournalThemeSectionByUsecase(
      theme,
      section,
      tipeSoal,
      jawaban,
      username
    );

    res.status(200).json({
      username: addJournal.username,
      theme: addJournal.theme,
      section: addJournal.section,
      tipeSoal: addJournal.tipeSoal,
      jawaban: addJournal.jawaban,
      message: `Answer successfully added!`,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
