// create express server
// required express
// const express = require('express')
// we firstly install npm i colors this is useful to make the terminal colorful
// npm i dotenv for .env file
// npm i morgan for its say that api request which url are hit
// const colors=require('colors')
// install nodemone for running node server automatically
// using npm i concureently two application run with one commond nd install cors package because no error come with onnecting two differenyt port application install in backend
// now we use import on place of require by change type= module in package.json
// after user login we want to hide register and login page that why we manage goble satate and get a menuwe use context api if we want then use redux tool
// npm i express-formidable using this we upload any type of file like image
//use braintree for payment gatway
import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors"
import path from 'path'

//configure env
dotenv.config();

// database config
connectDB();
const PORT = process.env.PORT ||8080;
// create rest object because we create a api 
const app = express();

//midelwares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// routes
 app.use("/api/v1/auth", authRoutes)
 app.use("/api/v1/category", categoryRoutes);
 app.use("/api/v1/product", productRoutes);
 app.use(express.static(path.join(__dirname,'./client/build')))
//rest api
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
// run on port no 8080 so create port no
//run listen
app.listen(PORT,()=>{
    console.log(`${process.env.CONF} server running on ${PORT}`.bgCyan.white)
})