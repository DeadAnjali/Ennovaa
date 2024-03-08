const User = require("../../model/user/User");

const UserRegusterCtrl=async (req,res)=>{
    const userExist= await User.findOne({email:req?.body?.email});
    if(userExist) throw new Error("Already in use");

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

module.exports={UserRegusterCtrl};