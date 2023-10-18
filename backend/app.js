import dotenv from "dotenv";
import express from "express";
// import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/route.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
// Not have db yet
// const DB_URL = process.env.DB_URL;

// mongoose.connect(DB_URL);
// const db = mongoose.connection;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
