const generateToken = require("../../config/token/generatetoken");
const User = require("../../model/user/User");

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

module.exports={UserRegusterCtrl,UserLoginCtrl};