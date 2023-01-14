import db from "../models/index";
import {
  createNewUser,
  getAllUser,
  getUserInfoById,
  updateUserData,
  deleteUserById,
} from "../services/CRUDService";

let getHomePage = async (req, res) => {
  // logic
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log("err", error);
  }
};

let getAboutPage = (req, res) => {
  return res.render("aboutpage.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await createNewUser(req.body);
  return res.send("post crud from server");
};

let diplayGetCRUD = async (req, res) => {
  const data = await getAllUser();

  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const userData = await getUserInfoById(userId);
    // check user data not found

    return res.render("editCRUD.ejs", {
      user: userData,
    });
  }
  return res.send("User not found");
};

let putCRUD = async (req, res) => {
  const data = req.body;
  const allUser = await updateUserData(data);

  return res.render("displayCRUD.ejs", {
    dataTable: allUser,
  });
};

let deleteCRUD = async (req, res) => {
  const id = req.query.id;
  if (id) {
    await deleteUserById(id);
    return res.send("Delete the user success!");
  } else {
    return res.send("User not found");
  }
};

module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
  diplayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
