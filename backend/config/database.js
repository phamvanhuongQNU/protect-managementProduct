const mongoose = require("mongoose")


module.exports.connect =async (URL)=>{
    try{
        await mongoose.connect(URL)
        console.log("conect database success")
    }
    catch(error){
        console.log("failed " + error)
    }
}