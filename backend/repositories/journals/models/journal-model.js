import mongoose from "mongoose";

const journalSchema = mongoose.Schema(
  {
    noTema: {
      required: true,
      type: Number,
    },
    noSoal: {
      required: true,
      type: Number,
    },
    //Seperti soal isian atau reaksi
    tipeSoal: {
      required: true,
      type: String,
    },
    jawaban: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Journal", journalSchema);
