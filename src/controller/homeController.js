import db from "../models/index";

let getHomePage = async (req, res) => {
  // logic
  try {
    let data = await db.User.findAll();
    console.log('--------------------------------');
    console.log(data);

    return res.render("homepage.ejs", {
        data: JSON.stringify(data)
    });
  } catch (error) {
    console.log("err", error);
  }
};

module.exports = {
  getHomePage,
};
