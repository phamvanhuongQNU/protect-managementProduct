const nodemailer = require("nodemailer");


module.exports = (email,subject,html)=>{
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
        to: email,
        subject: subject,
        html : html
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}