import {
  addUserByUsecase,
  deleteUserByUsecase,
  editUserByUsecase,
  findUsernamePasswordByUsecase,
  getDetailUserByUsecase,
  getUsersByUsecase,
} from "../../usecases/users/users.js";
import {
  getPesertaProgressByUseCase,
  getThemeProgressByUseCase,
  getPesertaProgressThemeByUseCase,
} from "../../usecases/journals/journals.js";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const getToken = async (payload) => {
//   const secret = process.env.JWT_SECRET;
//   const expiresIn = 60 * 60 * 1; //1 jam
//   const token = jwt.sign(payload, secret, { expiresIn: expiresIn });
//   return token;
// };

export const getUsers = async (req, res) => {
  const user = await getUsersByUsecase();

  if (!user) {
    return res.status(404).json({
      message: "User not exist!",
    });
  }

  res.json(user);
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
      message: `User ${userToAdd.username} has been succefully added`,
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

  if (
    typeof username == "undefined" ||
    !username ||
    typeof password == "undefined" ||
    !password ||
    typeof email == "undefined" ||
    !email ||
    typeof userType == "undefined" ||
    !userType
  ) {
    return res.status(400).json({
      message: err.message,
    });
  }

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
      message: `User ${userToAdd.username} has been succefully edited`,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userToDelete = await deleteUserByUsecase(id);
    res.status(200).json({
      message: `User with ID : ${id} has been deleted`,
      data: userToDelete,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// saat login add JWT
export const addLoginAuth = async (req, res) => {
  const { username, password } = req.body;

  const user = await findUsernamePasswordByUsecase(username);

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
      message: "success",
      data: data,
    });
  } else {
    return res.status(403).json({
      message: "Wrong Password!",
    });
  }
};

export const getThemeProgress = async (req, res) => {
  // get all peserta where theme = 1 - 7
  // masing2 tema dibagi banyak soal
  try {
    const data = await getThemeProgressByUseCase();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export const getPesertaProgress = async (req, res) => {
  // get all theme where peserta = username
  // hitung length masing2 theme lalu dibagi dengan banyak soal
  const { username } = req.params;

  if (typeof username == "undefined" || !username) {
    return res.status(400).json({
      message: "Username tidak boleh kosong!",
    });
  }
  try {
    const data = await getPesertaProgressByUseCase(username);
    return res.status(200).json({
      username: username,
      data: data,
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: "User tidak ditemukan!",
    });
  }
};

export const getPesertaThemeProgress = async (req, res) => {
  const { username, theme } = req.params;
  if (typeof username == "undefined" || !username) {
    return res.status(400).json({
      message: "Username tidak boleh kosong!",
    });
  }
  if (typeof theme == "undefined" || !theme) {
    return res.status(400).json({
      message: "Tema tidak boleh kosong!",
    });
  }
  try {
    const data = await getPesertaProgressThemeByUseCase(username, theme);
    return res.status(200).json({
      username: username,
      theme: theme,
      percentage: data,
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: "User tidak ditemukan!",
    });
  }
};

export const notFound = async (req, res) => {
  return res.status(404).json({
    message: "Request not found!",
  });
};
