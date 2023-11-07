import { DataUser } from "../../repositories/users/models/user_model.js";
import {
  addUserByUsecase,
  editUserByUsecase,
  findUserEmailPasswordByUsecase,
  getDetailUserByUsecase,
} from "../../usecases/users/users.js";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const getToken = async (payload) => {
//   const secret = process.env.JWT_SECRET;
//   const expiresIn = 60 * 60 * 1; //1 jam
//   const token = jwt.sign(payload, secret, { expiresIn: expiresIn });
//   return token;
// };

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
// PASSWORD DI ENCRYPT PAKE BCRYPT
// Jika user undefined has been added maka ada yang duplikat
export const addUser = async (req, res) => {
  const {
    username,
    password,
    email,
    userType,
    birthday = null,
    gender = null,
    education = null,
    city = null,
    phoneNo = null,
  } = req.body;

  try {
    const encryptPassword = await bcrypt.hash(password, 10);
    const userToAdd = await addUserByUsecase(
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
    res.status(200).json({
      message: `User ${userToAdd.id} has been succefully added`,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const editUser = async (req, res) => {
  const { id } = req.params;
  const {
    username,
    password,
    email,
    userType,
    birthday = null,
    gender = null,
    education = null,
    city = null,
    phoneNo = null,
  } = req.body;

  try {
    const encryptPassword = await bcrypt.hash(password, 10);
    const userToAdd = await editUserByUsecase(
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

    res.status(200).json({
      message: `User ${userToAdd.id} has been succefully edited`,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

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
    const data = {
      id: user.id,
      username: user.username,
      userType: user.userType,
    };
    // getToken(data);
    return res.json({
      data: data,
    });
  } else {
    return res.status(403).json({
      message: "Wrong Password!",
    });
  }
};
