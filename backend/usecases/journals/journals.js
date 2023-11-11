import { getUserJournalRepo } from "../../repositories/journals/journals.js";

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
