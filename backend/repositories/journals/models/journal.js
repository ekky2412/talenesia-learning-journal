import mongoose from "mongoose";

const journalSchema = mongoose.Schema(
  {
    // add journal model
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Journal", journalSchema);
