import {
  addJournalByRepo,
  getUserJournalRepo,
} from "../../repositories/journals/journals.js";

export const getUserJournalByUsecase = async (username) => {
  const journals = await getUserJournalRepo(username);

  if (!journals || journals.length == 0) {
    return null;
  }

  // let newUsers = [];

  // users.forEach((p, i = 0) => {
  // newUsers[i] = {
  //   videoID: p.videoID,
  //   title: p.title,
  //   urlThumbnail: p.urlThumbnail,
  //   urlVideo: p.urlVideo,
  // };
  //   i++;
  // });

  return journals;
};

export const getUserJournalThemeByUsecase = async () => {};

export const getUserJournalThemeSectionByUsecase = async () => {};

export const addUserJournalThemeSectionByUsecase = async (
  theme,
  section,
  tipeSoal,
  jawaban,
  username
) => {
  const journalToAdd = await addJournalByRepo(
    theme,
    section,
    tipeSoal,
    jawaban,
    username
  );
  return journalToAdd;
};
