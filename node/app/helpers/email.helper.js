const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587 ,
    auth: {
              user:"5d93b5af4dbd7c",
             pass:"46cdcb987628a3"
    }
  });
  

  
  var mailOptions = {
    from: '"Example Team" <from@ourProject.com>',
    to: "islamm1995@gmail.com",
    subject: 'Nice Nodemailer test',
    text: 'Hey there, it’s our first message sent with Nodemailer ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
   
  };
  
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
 


// module.exports=sendEMails



