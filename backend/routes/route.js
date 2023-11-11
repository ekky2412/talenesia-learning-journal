import express from "express";
const router = express.Router();
import * as users from "../controllers/rest/users.js";
import { getUserJournal } from "../controllers/rest/journals.js";

// Admin
router.get("/users", users.getUsers);
router.get("/users/:username", users.getDetailUser);
router.post("/users", users.addUser);
router.post("/users/update/:id", users.editUser);
router.post("/users/delete/:id", users.deleteUser);

// User
// router.post("/login/auth", addLoginAuth);
router.get("/journal/:username", getUserJournal);
// router.get("/journal/:username/:theme", getUserJournalTheme);
// router.get("/journal/:username/:theme/:section", getUserJournalThemeSection);
// router.post("/journal/:username/:theme/:section", addUserJournalThemeSection);

export default router;
