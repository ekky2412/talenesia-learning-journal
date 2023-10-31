import { getUserJournalByUsecase } from "../../usecases/journals/journals";

export const getUserJournal = async (req, res) => {
  const users = await getUserJournalByUsecase();

  if (!users) {
    return res.status(404).json({
      message: "User Journal not exists!",
    });
  }

  let newUsers = [];

  users.newUsers.forEach((p, i = 0) => {
    newUsers[i] = p;
    i++;
  });

  res.json(newUsers);
};

export const getUserJournalTheme = async (req, res) => {};

export const getUserJournalThemeSection = async (req, res) => {};
