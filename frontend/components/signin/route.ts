import dbConnect from "C:/Users/tanis/OneDrive/Desktop/reactProject/enovaa/Ennovaa/config/db.js";
import User from "C:/Users/tanis/OneDrive/Desktop/reactProject/enovaa/Ennovaa/model/user/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { error } from "console";

dbConnect();

export async function POST(request: NextRequest) {
    try{
        const reqBody = await request.json()
        const {username, email, passsword } = reqBody
        
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "user already exist"}, {status: 400})
        }

        const salt await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(passsword, salt)

        const newUser = new User({
            username,
            email,
            passsword : hashPassword
        })

        const savedUser = await newUser.save();

        return NextResponse.json({
            message : "user created succesfully",
            success : true,
            savedUser
        })

    }catch(error: any){
        return NextResponse.json({error: error.message},{status: 500})
    }
}