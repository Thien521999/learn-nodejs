import express from "express";
import bodyParser from 'body-parser';
import connectDB from "./config/connectDB";
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
// import connectDB from 'connectDB';
import cors from 'cors';

require('dotenv').config()

const app = express()
app.use(cors({origin: true}));

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup view engine
configViewEngine(app);
// init web route
initWebRoute(app);

connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})