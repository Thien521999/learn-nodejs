import db from "../models/index";
import { createNewUser } from "../services/CRUDService";

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

module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
};
