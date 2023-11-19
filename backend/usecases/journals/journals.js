import {
  addJournalByRepo,
  getUserJournalRepo,
  getUserJournalPantauThemeByRepo,
  addTugasByRepo,
  getUserJournalThemeByRepo,
  getUserJournalThemeSectionByRepo,
  getSectionOneDistinctRepo,
  getJournalTheme,
} from "../../repositories/journals/journals.js";

import { getUsernameDistinctRepo } from "../../repositories/users/users.js";

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

// Tema 1 : 9 section
// Tema 2 : 9 section
// Tema 3 : 5 section
// Tema 4 : 11 section
// Tema 5 : 14 section
// Tema 6 : 7 section
// Tema 7 : 8 section
// Tema 8 : 12 section
// Tema 9 : 9 section

export const getThemeProgressByUseCase = async () => {
  const section = [9, 9, 5, 11, 14, 7, 8, 12, 9];
  const namaPeserta = await getUsernameDistinctRepo();
  section.map((element, index) => {
    section[index] *= namaPeserta.length;
  });
  let hasil = [];
  for (let i = 0; i < 9; i++) {
    const section = await getSectionOneDistinctRepo(i + 1);
    const percentage = await getJournalTheme(i + 1);
    if (section.length != 0) {
      hasil[i] = percentage.length + section.length;
    } else {
      hasil[i] = percentage.length;
    }
  }
  hasil.map((x, index) => {
    hasil[index] = Math.round((x * 100) / section[index]);
  });
  let hasilNew = [];
  hasil.forEach((element, i = 0) => {
    hasilNew[i] = {
      theme: i + 1,
      percentage: element,
    };
  });
  return hasilNew;
};

export const getPesertaProgressByUseCase = async (username) => {
  const section = [9, 9, 5, 11, 14, 7, 8, 12, 9];
  let hasil = [];
  for (let i = 0; i < 9; i++) {
    const percentageSection1 = await getUserJournalPantauThemeByRepo(
      username,
      i + 1
    );
    const percentage = await getUserJournalThemeByRepo(username, i + 1);
    if (percentageSection1.length != 0) {
      hasil[i] = percentage.length + 1;
    } else {
      hasil[i] = percentage.length;
    }
  }
  hasil.map((x, index) => {
    hasil[index] = Math.round((x * 100) / section[index]);
  });
  let hasilNew = [];
  hasil.forEach((element, i = 0) => {
    let finished;
    if (element != 100) finished = false;
    else finished = true;
    hasilNew[i] = {
      theme: i + 1,
      percentage: element,
      finished: finished,
    };
  });
  return hasilNew;
};

export const getPesertaProgressThemeByUseCase = async (username, theme) => {
  const section = [9, 9, 5, 11, 14, 7, 8, 12, 9];
  const percentageSection1 = await getUserJournalPantauThemeByRepo(
    username,
    theme
  );
  let hasil;
  const percentage = await getUserJournalThemeByRepo(username, theme);
  if (percentageSection1.length != 0) {
    hasil = percentage.length + 1;
  } else {
    hasil = percentage.length;
  }
  hasil = Math.round((hasil * 100) / section[theme - 1]);
  return hasil;
};
