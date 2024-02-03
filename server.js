const express=require("express");
const app=express();

const dbConnect=require("./config/db");
dbConnect();

const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`the port ${PORT}is running`));

//e56sv1KnTkbJDna7