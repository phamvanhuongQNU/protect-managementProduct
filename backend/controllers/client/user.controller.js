const Users = require("../../models/user.model");
const Otp =require('../../models/otp.model')
const RandomNumber = require('../../helpers/randomNumber')
const RandomString = require('../../helpers/randomString')
const sendEmail = require('../../helpers/sendEmail')
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
// [post] /register
module.exports.register =async (req,res) =>{
  const email = req.body.email;
  try{
    if (req.body.password === "" || req.body.repeatPassword === "" || req.body.fullName === "" || req.body.email === "" ){
      res.status(404).json({
        message : "Bạn chưa nhập đủ dữ liệu"
      })
      return
    }
    if (req.body.password !== req.body.repeatPassword ){
      res.status(404).json({
        message : "Vui lòng nhập xác nhận mật khẩu chính xác"
      })
      return
    }

    const existsUser = await Users.findOne({email : email,deleted : false}).select("password email");
    if (existsUser){
      res.status(404).json({
        message : "Email đã tồn tại"
      })
      return
    }
    //  gửi otp và email lên database
    let timeExpire = new Date();
    timeExpire.setTime(timeExpire.getTime() + 2 *60 *1000)
    const dataOtp = new Otp({
      email : email,
      otp : RandomNumber(6),
      expireAt : timeExpire
    })
    
     await dataOtp.save();
    // Gửi otp cho gmail 
    const subject = "Mã xác nhận OTP"
    const text = `Mã xác thực của bạn là <b>${dataOtp.otp}<b/>. Mã OTP này có hiệu lực trong 2 phút.Vui lòng không chia sẻ mã cho bất kì ai`
    sendEmail(dataOtp.email,subject,text)
    res.status(200).json({
      message : "Gửi mã thành công",
      data : dataOtp
    })
  }
  catch(error){
    res.status(500).json(error);
  }
}
// [post] /registerOtp

module.exports.registerOtp =async (req,res) =>{
  const email = req.body.email;
  const otp = req.body.otp;
  try{
    const existOtpUser = await Otp.findOne({email : email,otp : otp});
    if (!existOtpUser){
      res.status(404).json({
        message : "Bạn đã nhập sai mã otp vui lòng nhập lại."
      })
    return
    }


    // Thêm tài khoản vào dữ liệu
    const newUser = new Users({
      fullName : req.body.fullName,
      email : email,
      password : md5(req.body.password),
      token : RandomString(30)
    })
    const data = await newUser.save();
    res.status(200).json({
      message : "Đăng kí thành công",
      data : data
    })
  }
  catch(error){
    res.status(500).json(error);
  }
}