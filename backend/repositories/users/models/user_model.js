import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const dataSchema = new mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true,
      dropDups: true,
    },
    username: {
      required: true,
      type: String,
      unique: true,
      dropDups: true,
    },
    password: {
      required: true,
      type: String,
    },
    // admin or user
    userType: {
      required: true,
      type: String,
    },
    birthday: {
      type: Date,
    },
    gender: {
      type: String,
    },
    education: {
      type: String,
    },
    city: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

dataSchema.plugin(uniqueValidator, {
  type: "mongoose-unique-validator",
  message: "Error, username dan email sudah terdaftar!",
});
export const DataUser = mongoose.model("users", dataSchema);
