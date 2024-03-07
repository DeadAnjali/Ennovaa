//This is a server-main entry point of the application

const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();

const dbConnect=require("./config/db");
dbConnect();

const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`the port ${PORT}is running`));
