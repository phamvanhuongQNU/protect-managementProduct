const User = require("../models/user.model");

module.exports =async (req,res,next)=>{
        if (req.headers.authorization){
            
            const token = req.headers.authorization.split(" ")[1];
            const existUser = await User.findOne({token : token});
            if (existUser){
                next();
            }
            else{
                res.json({mess : "Lỗi không đúng token"})
            }
            return
        }
    next();
}