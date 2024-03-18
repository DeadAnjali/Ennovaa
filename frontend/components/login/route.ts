import dbConnect from "C:/Users/tanis/OneDrive/Desktop/reactProject/enovaa/Ennovaa/config/db.js";
import User from "C:/Users/tanis/OneDrive/Desktop/reactProject/enovaa/Ennovaa/model/user/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"; //install types about bcrpyt js
import { error } from "console";
import jwt from "jsonwebtoken";

dbConnect();

export async function POST(request: NextRequest){
    try {

        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);
        
        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}