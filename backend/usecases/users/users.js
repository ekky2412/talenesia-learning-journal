import {
  getDetailUserByRepo,
  getUserByEmailRepo,
} from "../../repositories/users/users";

export const getUsersByUsecase = async () => {};
export const getDetailUserByUsecase = async (username) => {
  const user = await getDetailUserByRepo(username);

  if (!user || user.length == 0) {
    return null;
  }

  return user;
};

export const addUserByUsecase = async () => {};
export const addLoginAuthByUsecase = async () => {};
export const findUserEmailPasswordByUsecase = async (email) => {
  const user = getUserByEmailRepo(email);

  if (!user || user.length == 0) {
    return null;
  }

  return user;
};
