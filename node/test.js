// STRIPE_KEY=pk_test_51L3vAFJ7xRuKEENlWkl3i7HuZ5hj9ucbnNrKdUpB79vV1TTdPibDCUCBzMzXv45doogbElMjLMjsDBqM89LdzJDO00HQOmfOz2

// STRIPE_SECRET=sk_test_51L3vAFJ7xRuKEENl23o91YyHjMTdo3mn7oeUUMbJD1V3aCDJ99YU9OJkLa8IBLX0eybTWog16xxTFcbb2lpsnWRM00dZUnSB4o

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

