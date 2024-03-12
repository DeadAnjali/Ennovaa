const express= require("express");
const userRoute=express.Router();
const { UserRegusterCtrl } = require("../../controller/user/UserCtrl");
const {UserLoginCtrl,fetchUsersCtrl}=require("../../controller/user/UserCtrl");

userRoute.post("/register",UserRegusterCtrl);
userRoute.post("/login",UserLoginCtrl);
userRoute.get("/",fetchUsersCtrl);

module.exports=userRoute;
