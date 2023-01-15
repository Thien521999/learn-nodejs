import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.diplayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);

  return app.use("/", router);
};

export default initWebRoute;
