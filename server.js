//This is a server-main entry point of the application
const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();

const dbConnect=require("./config/db");
const { UserRegusterCtrl } = require("./controller/user/UserCtrl");
dbConnect();

app.post("/api/users/register",UserRegusterCtrl);


app.post("/api/users/login",(req,res)=>{
    res.json({
        user:"User Login"
    })
});
app.get("/api/users",(req,res)=>{
    res.json({
        user:"fetch all user"
    })
})

const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`the port ${PORT}is running`));
