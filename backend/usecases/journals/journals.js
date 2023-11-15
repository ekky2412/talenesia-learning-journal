import {
  addJournalByRepo,
  getUserJournalRepo,
  getUserJournalPantauThemeByRepo,
  addTugasByRepo,
  getUserJournalThemeByRepo,
  getUserJournalThemeSectionByRepo,
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

export const getUserJournalPantauThemeByUsecase = async (username, theme) => {
  const journal = getUserJournalPantauThemeByRepo(username, theme);
  if (!journal || journal.length == 0) {
    return null;
  }
  return journal;
};

export const addUserJournalPantauThemeByUsecase = async (
  username,
  theme,
  noTugas,
  sedangDikerjakan,
  sudahDikumpulkan,
  masukan
) => {
  const journalToAdd = await addTugasByRepo(
    theme,
    noTugas,
    sedangDikerjakan,
    sudahDikumpulkan,
    masukan,
    username
  );
  return journalToAdd;
};

export const getUserJournalThemeByUsecase = async (username, theme) => {
  const journals = await getUserJournalThemeByRepo(username, theme);

  if (!journals || journals.length == 0) {
    return null;
  }

  return journals;
};

export const getUserJournalThemeSectionByUsecase = async (
  username,
  theme,
  section
) => {
  const journals = await getUserJournalThemeSectionByRepo(
    username,
    theme,
    section
  );

  if (!journals || journals.length == 0) {
    return null;
  }

  return journals;
};

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