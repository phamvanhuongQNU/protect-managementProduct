const Users = require("../../models/user.model");
const md5 = require("md5");
// [post] /login
module.exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = md5(req.body.password);
    
    const existsUser = await Users.findOne({email : email,deleted : false}).select("email password token");
    
    if(!existsUser){
        res.status(400).json({
            message : "Email không tồn tại"
        })
        return
    }
    if(existsUser.password !== password){
        res.status(400).json({
            message : "Sai mật khẩu"
        })
        return
    }
    res.status(200).json({
        data : existsUser
    })
  } catch(error) {
    res.status(500).json(error)
  }
};
// [get] /user/detail/:token
module.exports.detail = async (req, res) => {
  try{
      const token = req.params.token;
      const find = {
        token : token,
        deleted : false
      }
      const user = await Users.findOne(find).select("-password -token -deleted -role");
      res.status(200).json({
        data :user
      })
  }catch(error){
    res.status(500).json(error)
  }
};