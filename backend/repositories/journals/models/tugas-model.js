import mongoose from "mongoose";

const tugasSchema = mongoose.Schema(
  {
    noTema: {
      required: true,
      type: Number,
    },
    noTugas: {
      required: true,
      type: Number,
    },
    sedangDikerjakan: {
      required: true,
      type: Boolean,
    },
    sudahDikumpulkan: {
      required: true,
      type: Boolean,
    },
    masukan: {
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

export default mongoose.model("Tugas", tugasSchema);
