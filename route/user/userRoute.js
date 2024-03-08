const express= require("express");
const userRoute=express.Router();
const { UserRegusterCtrl } = require("../../controller/user/UserCtrl");

userRoute.post("/register",UserRegusterCtrl);

module.exports=userRoute;
