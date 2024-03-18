const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    firstName:{
        required:[true,"First name is required"],
        type:String,
    },
    lastName:{
        // required:[true,"Last name is required"],
        type:String,
    },
    profilePhoto:{
        type:String,
        default:"",
    },
    email:{
        type:String,
        required:[true,"email is required"],
    },
    bio:{
        type:String,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    postCount:{
        type:Number,
        default:0,
    },
    isBlocked:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    role:{
        type:String,
        enum:["Admin","Guest","Blogger"],
    },
    isFollowing:{
        type:Boolean,
        default:false,
    },
    isUnFollowing:{
        type:Boolean,
        default:false,
    },
    isAccountVerified:{
        type:Boolean,
        default:false,
    },
    accountVerificationToken: String,
    accountVerificationTokenExpires: Date,
    viewedBy:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                //provide reference to User type of model
            }
        ]
    },
    followers:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                //provide reference to User type of model
            }
        ]
    },
    following:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                //provide reference to User type of model
            }
        ]
    },
    passwordChangeAt: Date,
    passwordRessetToken:String,
    passwordRessetExpired:Date,
    active:{
        type:Boolean,
        default:false,
    },
},{
    toJSON:{
        virtuals:true,

    },
    toObject:{
        virtuals:true,
    },
    timestamps:true,
})
//it has two arguments

userSchema.methods.isPasswordMatched= async function (enterpass){
    return this.password===enterpass;
};
//we make model of a schema through
const User=mongoose.model("User",userSchema);


module.exports=User;//gotta export stuff for it to work