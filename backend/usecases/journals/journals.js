import { getUserJournalRepo } from "../../repositories/journals/journals";

export const getUserJournalByUsecase = async () => {
  const users = await getUserJournalRepo();

  if (!users || users.length == 0) {
    return null;
  }

  let newUsers = [];

  users.forEach((p, i = 0) => {
    // newUsers[i] = {
    //   videoID: p.videoID,
    //   title: p.title,
    //   urlThumbnail: p.urlThumbnail,
    //   urlVideo: p.urlVideo,
    // };
    i++;
  });

  return newUsers;
};

export const getUserJournalThemeByUsecase = async () => {};

export const getUserJournalThemeSectionByUsecase = async () => {};
