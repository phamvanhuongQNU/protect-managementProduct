const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName : String,
    email : String,
    password : String,
    address : {
        // Tỉnh
        province : String,
        // Thành phố,thị xã
        district : String,
        // Xã phường
        ward : String,
        // Đường
        street : String
        
    },
    phone : String,
    token : String,
    deleted : {
        type : Boolean,
        default : false
    },
    
    role : String,
    

},{ timestamps: true })

const User =  mongoose.model("User",UserSchema,"users");
module.exports = User;