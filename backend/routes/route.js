import express from "express";
const router = express.Router();
import {
  getUsers,
  getDetailUser,
  addUser,
  editUser,
  deleteUser,
  addLoginAuth,
  notFound,
  getThemeProgress,
  getPesertaProgress,
  getPesertaThemeProgress,
} from "../controllers/rest/users.js";
import {
  getUserJournal,
  addUserJournalThemeSection,
  getUserJournalPantauTheme,
  addUserJournalPantauTheme,
  getUserJournalTheme,
  getUserJournalThemeSection,
} from "../controllers/rest/journals.js";

// Admin
router.get("/users", getUsers);
router.get("/users/:username", getDetailUser);
router.post("/users", addUser);
router.post("/users/update/:id", editUser);
router.post("/users/delete/:id", deleteUser);

router.get("/progress/tema", getThemeProgress); // progress tiap tema untuk semua peserta
router.get("/progress/peserta/:username", getPesertaProgress); // progress seluruh tema untuk satu peserta
router.get("/progress/peserta/:username/:theme", getPesertaThemeProgress); // progress tiap tema untuk satu peserta

// User
router.post("/login/auth", addLoginAuth);
router.get("/journal/:username", getUserJournal);
router.get("/journal/tugas/:username/:theme", getUserJournalPantauTheme);
router.post("/journal/tugas/:username/:theme", addUserJournalPantauTheme);
router.get("/journal/:username/:theme", getUserJournalTheme);
router.get("/journal/:username/:theme/:section", getUserJournalThemeSection);
router.post("/journal/:username/:theme/:section", addUserJournalThemeSection);

router.get("*", notFound);
router.post("*", notFound);

export default router;
