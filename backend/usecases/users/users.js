import {
  getDetailUserByRepo,
  getUserByEmailRepo,
  addUserByRepo,
  editUserByRepo,
} from "../../repositories/users/users.js";

export const getUsersByUsecase = async () => {};
export const getDetailUserByUsecase = async (username) => {
  const user = await getDetailUserByRepo(username);

  if (!user || user.length == 0) {
    return null;
  }

  return user;
};

export const addUserByUsecase = async (
  username,
  encryptPassword,
  email,
  userType,
  birthday,
  gender,
  education,
  city,
  phoneNo
) => {
  const userToAdd = await addUserByRepo(
    username,
    encryptPassword,
    email,
    userType,
    birthday,
    gender,
    education,
    city,
    phoneNo
  );
  return userToAdd;
};

export const editUserByUsecase = async (
  id,
  username,
  encryptPassword,
  email,
  userType,
  birthday,
  gender,
  education,
  city,
  phoneNo
) => {
  const userToAdd = await editUserByRepo(
    id,
    username,
    encryptPassword,
    email,
    userType,
    birthday,
    gender,
    education,
    city,
    phoneNo
  );
  return userToAdd;
};

export const addLoginAuthByUsecase = async () => {};
export const findUserEmailPasswordByUsecase = async (email) => {
  const user = getUserByEmailRepo(email);

  if (!user || user.length == 0) {
    return null;
  }

  return user;
};
