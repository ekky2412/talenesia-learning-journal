import { DataUser } from "./models/user_model.js";

export const getUserRepo = async () => {
  try {
    const users = await DataUser.find();
    return users;
  } catch (err) {
    return err;
  }
};

export const getDetailUserByRepo = async (username) => {
  try {
    const user = await DataUser.find({ username });
  } catch (err) {
    return err;
  }
};

export const getUserByEmailRepo = async (email) => {
  try {
    const user = await DataUser.findOne({
      email: email,
    });
    return user;
  } catch (err) {
    return err;
  }
};

export const addUserByRepo = async (
  username,
  password,
  email,
  userType,
  birthday,
  gender,
  education,
  city,
  phoneNo
) => {
  try {
    const userToSave = new DataUser({
      username,
      password,
      email,
      userType,
      birthday,
      gender,
      education,
      city,
      phoneNo,
    });
    const saveUser = await userToSave.save();
    return saveUser;
  } catch (err) {
    return err;
  }
};
