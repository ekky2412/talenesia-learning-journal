import {
  getUserJournalByUsecase,
  addUserJournalThemeSectionByUsecase,
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

export const getUserJournalTheme = async (req, res) => {};

export const getUserJournalThemeSection = async (req, res) => {};

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
