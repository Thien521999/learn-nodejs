import db from "../models/index";
import { createNewUser, getAllUser } from "../services/CRUDService";

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

module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
  diplayGetCRUD,
};
