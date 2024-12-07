const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
    email : String,
    otp : String,
    expireAt : {
        type : Date,
        expires : 0
    }
})
const Otp = mongoose.model("Otp",OtpSchema,"otps")
module.exports = Otp