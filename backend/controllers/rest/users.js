import { DataUser } from "../../repositories/users/models/user_model.js";
import {
  findUserEmailPasswordByUsecase,
  getDetailUserByUsecase,
} from "../../usecases/users/users.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    let result = await DataUser.find();
    res.send(result).status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDetailUser = async (req, res) => {
  const { username } = req.params;
  const user = await getDetailUserByUsecase(username);

  if (!user) {
    return res.status(404).json({
      message: "User not exist!",
    });
  }

  res.json(user);
};

// khusus admin
export const addUser = async (req, res) => {};

// saat login add JWT
export const addLoginAuth = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserEmailPasswordByUsecase(email);

  if (!user) {
    return res.status(404).json({
      message: "User not found!",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    return res.json({
      data: {
        email: user.email,
        name: user.name,
      },
    });
  } else {
    return res.status(403).json({
      message: "Wrong Password!",
    });
  }
};
