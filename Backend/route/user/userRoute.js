const express= require("express");
const userRoute=express.Router();
const { UserRegusterCtrl, deleteUsersCtrl, fetchOneUser } = require("../../controller/user/UserCtrl");
const {UserLoginCtrl,fetchUsersCtrl}=require("../../controller/user/UserCtrl");

userRoute.post("/register",UserRegusterCtrl);
userRoute.post("/login",UserLoginCtrl);
userRoute.get("/",fetchUsersCtrl);
userRoute.delete("/:id",deleteUsersCtrl);
userRoute.get("/:id",fetchOneUser);
module.exports=userRoute;
