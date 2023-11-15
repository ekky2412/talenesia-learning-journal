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
  let journalToAdd = [];
  var i = 0;
  try {
    for (var key in req.body) {
      console.log(req.body.hasOwnProperty(key));
      if (req.body.hasOwnProperty(key)) {
        if (
          typeof req.body[key].noTugas == "undefined" ||
          typeof req.body[key].sedangDikerjakan == "undefined" ||
          typeof req.body[key].sudahDikumpulkan == "undefined" ||
          typeof req.body[key].masukan == "undefined"
        ) {
          throw Error("Body tidak boleh kosong!");
        }
        const journal = await addUserJournalPantauThemeByUsecase(
          username,
          theme,
          req.body[key].noTugas,
          req.body[key].sedangDikerjakan,
          req.body[key].sudahDikumpulkan,
          req.body[key].masukan
        );
        console.log(journal);
        journalToAdd[i] = journal;
        i++;
      }
    }

    res.status(200).json({
      message: `Answer successfully added!`,
      data: journalToAdd,
    });
  } catch (err) {
    console.log(err);
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
  let journals;
  try {
    if (section === "1") {
      journals = await getUserJournalPantauThemeByUsecase(username, theme);
    } else {
      journals = await getUserJournalThemeSectionByUsecase(
        username,
        theme,
        section
      );
    }
  } catch (err) {
    console.log(err);
  }

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
    if (section == "1") {
      throw Error("Gunakan endpoint /journal/tugas/:username/:theme");
    }
    if (
      typeof tipeSoal == "undefined" ||
      !tipeSoal ||
      typeof jawaban == "undefined" ||
      !jawaban
    ) {
      throw Error("tipeSoal dan jawaban tidak boleh kosong!");
    }

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
