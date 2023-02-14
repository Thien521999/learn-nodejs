import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

// check email exist
const checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: {
          email: userEmail,
        },
      });

      if (user) {
        resolve(true);
      }
      resolve(false);
    } catch (e) {
      reject(e);
    }
  });
};

const handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = {};
      const isExist = await checkUserEmail(email);

      if (isExist) {
        // user already exits
        const user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "roleId", "password"],
          raw: true,
        });

        if (user) {
          // compare password
          const check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "Ok";

            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `Your's not found`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in your system.Pls try enter other email!`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = [];
      if (userId === "ALL") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"], // ko bao gom password
          },
        });
      }

      if (userId && userId !== "ALL") {
        users = await db.User.findOne({
          where: {
            id: userId,
          },
          attributes: {
            exclude: ["password"], // ko bao gom password
          },
        });
      }
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

const createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check email exist
      const isCheckExist = await checkUserEmail(data.email);
      if (isCheckExist) {
        resolve({
          errCode: 1,
          message: "Your email is already in used.Pls try enter another email!",
        });
      } else {
        const hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phonenumber: data.phonenumber,
          gender: data.gender === "1" ? true : false,
          roleId: data.roleId,
        });

        resolve({
          errCode: 0,
          message: "Ok",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Missing required parameters",
        });
      }

      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (user) {
        user.email = data.email;
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;

        await user.save();

        resolve({
          errCode: 0,
          message: "Update the user success!",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: `User's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: userId },
      });

      if (!user) {
        resolve({
          errCode: 2,
          errMessage: `The user isn't exist`,
        });
      } else {
        // ko dung dc cach nay ,do condig raw in file config.json
        // await user.destroy();
        // cach 2
        await db.User.destroy({
          where: { id: userId },
        });

        resolve({
          errCode: 0,
          errMessage: `Delete user success!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin,
  getAllUsers,
  createNewUser,
  updateUserData,
  deleteUser,
};
