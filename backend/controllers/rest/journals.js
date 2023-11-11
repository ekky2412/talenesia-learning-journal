import { getUserJournalByUsecase } from "../../usecases/journals/journals.js";

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
