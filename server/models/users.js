const mongoose =require('mongoose');

const userSchema =new mongoose.Schema({
    email: {type:String, 
            required:[true,"Your email is required"]
    },
    username:{
        type:String,
        required :[true,"your username is required"]
    },
    password:{
        type:String,
        required :[true,"Password is required"]
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

//module.exports = mongoose.model("Users",userSchema)
module.exports = mongoose.model("users", userSchema)