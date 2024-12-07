const nodemailer = require("nodemailer");


module.exports = (email,otp,subject,html)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: 'phamvanhuongtk@gmail.com',
          pass: 'uzhl lfoy cqgj aoot'
        }
      });
      var mailOptions = {
        from: 'phamvanhuongtk@mail.com',
        to: 'dolataoday123@gmail.com',
        subject: 'Sending Email using Node.js',
        html : `Mã otp của bạn là <b>1232</b> Vui lòng không chia sẽ mã này cho người khác`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}