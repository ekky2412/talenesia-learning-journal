import { DataUser } from "./models/user_model.js";

export const getUsersRepo = async () => {
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
    return user;
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

export const getUserByUsernameRepo = async (username) => {
  try {
    const user = await DataUser.findOne({
      username: username,
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

export const editUserByRepo = async (
  id,
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
    const userToEdit = DataUser.findByIdAndUpdate(id, {
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
    return userToEdit;
  } catch (err) {
    return err;
  }
};

export const deleteUserByRepo = async (id) => {
  try {
    const userToDelete = DataUser.findByIdAndDelete(id);
    return userToDelete;
  } catch (err) {
    return err;
  }
};

export const getUsernameDistinctRepo = async () => {
  try {
    const username = DataUser.find({ userType: "user" }).distinct("username");
    return username;
  } catch (err) {
    return err;
  }
};
