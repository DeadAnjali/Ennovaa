const express= require("express");
const userRoute=express.Router();
const { UserRegusterCtrl } = require("../../controller/user/UserCtrl");
const {UserLoginCtrl}=require("../../controller/user/UserCtrl");

userRoute.post("/register",UserRegusterCtrl);
userRoute.post("/login",UserLoginCtrl);
module.exports=userRoute;
