const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName : String,
    email : String,
    password : String,
    address : {
        province : String,
        district : String,
        ward : String,
        street : String
        
    },
    phone : String,
    token : String,
    deleted : {
        type : Boolean,
        default : false
    }


},{ timestamps: true })