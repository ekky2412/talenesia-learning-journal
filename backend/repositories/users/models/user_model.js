import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
  },
  {
    versionKey: false,
    collection: "users",
  }
);

export const DataUser = mongoose.model("users", dataSchema);
