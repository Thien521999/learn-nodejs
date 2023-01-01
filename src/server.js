import express from "express";
import connectDB from "./config/connectDB";
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
// import connectDB from 'connectDB';
require('dotenv').config()

const app = express()

// config app
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// setup view engine
configViewEngine(app);
// init web route
initWebRoute(app);

connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})