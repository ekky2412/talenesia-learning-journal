import express from "express";
const router = express.Router();
import * as users from "../controllers/rest/users.js";

// Admin
router.get("/users", users.getUsers);
// router.get("/user/:id", getDetailUser);
router.post("/users/update/:id", users.editUser);
router.post("/users", users.addUser);

// User
// router.post("/login/auth", addLoginAuth);
// router.get("/journal", getUserJournal);
// router.get("/journal/theme/:theme", getUserJournalTheme);
// router.get("/journal/theme/:theme/:section", getUserJournalThemeSection);

export default router;
