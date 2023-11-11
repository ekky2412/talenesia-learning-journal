import express from "express";
const router = express.Router();
import {
  getUsers,
  getDetailUser,
  addUser,
  editUser,
  deleteUser,
} from "../controllers/rest/users.js";
import {
  getUserJournal,
  addUserJournalThemeSection,
  getUserJournalPantauTheme,
  addUserJournalPantauTheme,
  getUserJournalTheme,
} from "../controllers/rest/journals.js";

// Admin
router.get("/users", getUsers);
router.get("/users/:username", getDetailUser);
router.post("/users", addUser);
router.post("/users/update/:id", editUser);
router.post("/users/delete/:id", deleteUser);

// User
// router.post("/login/auth", addLoginAuth);
router.get("/journal/:username", getUserJournal);
router.get("/journal/tugas/:username/:theme", getUserJournalPantauTheme);
router.post("/journal/tugas/:username/:theme", addUserJournalPantauTheme);
router.get("/journal/:username/:theme", getUserJournalTheme);
// router.get("/journal/:username/:theme/:section", getUserJournalThemeSection);
router.post("/journal/:username/:theme/:section", addUserJournalThemeSection);

export default router;
