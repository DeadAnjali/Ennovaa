const generateToken = require("../../config/token/generatetoken");
const User = require("../../model/user/User");
const expressAsyncHandler=require("express-async-handler");
const validMongoDbId = require("../utils/validateMongoDB");

const UserRegusterCtrl=async (req,res)=>{
    // const userExist= await User.findOne({email:req?.body?.email});
    //if(userExist) throw new Error("Already in use");

    //throw error in controller
    try {
    const user=await User.create({
        firstName:req?.body?.firstName,
        lastName:req?.body?.lastName,
        email:req?.body?.email,
        password:req?.body?.password,
    })
    res.json(user); 
    } catch (error) {
        res.json({error})
    }
    
}
const UserLoginCtrl=async (req,res)=>{
    const {email,password}=req.body;
    const userLogin= await User.findOne({email});
    if(userLogin&& await (userLogin.isPasswordMatched(password))){
        res.json({
            firstName:userLogin?.firstName,
            lastName:userLogin?.lastName,
            email:userLogin?.email,
            token:generateToken(userLogin?._id)
        });
    }
    else {
        //throw new Error(`Login credentials are not valid`);
        res.json({message:"Your login is not valid"});
    }
}
const fetchUsersCtrl=expressAsyncHandler(async(req,res)=>{
    try{
        const users=await User.find({});
        res.json(users);
    }
    catch(error){
        res.json(error);
    }
})

const deleteUsersCtrl= expressAsyncHandler(async(req,res)=>{
    const {id}=req.params;
    validMongoDbId(id);
    try {
        const deletedUser= await User.findByIdAndDelete(id);
        res.send(deletedUser);
    } catch (error) {
        res.json(error);
    }
})
const fetchOneUser= expressAsyncHandler(async(req,res)=>{
    const {id} =req.params;
    validMongoDbId(id);
    try{
        const oneUser=await User.findById(id);
        res.json(oneUser);
    }
    catch(error){
        res.send(error);
    }
})

module.exports={UserRegusterCtrl,UserLoginCtrl,fetchUsersCtrl,deleteUsersCtrl,fetchOneUser};