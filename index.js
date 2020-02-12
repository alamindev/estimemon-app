var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const Credential = require('./config');
bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())

router.post('/send-message', (req, res) => {
  let data = '';
  req.body.message.forEach(function (val) {
    data += '<li style="list-style-type: decimal; "> ' + val.question + '<span style="display:block; font-weight: bold;">selected: ' + val.answer + '</span></li>'
  })
  const output = `
    <h1>You have a new contact request</h1>
    <h3>Contact Details</h3>
    <ul style="list-style-type: decimal; ">  
      <li>Name: ${req.body.name}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Email: ${req.body.email}</li>
      <li>Company: ${req.body.company}</li>
      <li>Price: ${req.body.price}</li>
    </ul>
    <h3>Message: </h3> 
    <ul> 
    ${data}
    </ul>
  `;
  var transporter = nodemailer.createTransport({
    //NOTE: if you use your mail host then uncomment 
    // host: 'mail.yourdomain.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    // auth: {
    //   user: Credential.USER,
    //   pass: Credential.PASS
    // },
    // tls:{
    //   rejectUnauthorized:false
    // }

    service: 'gmail', // NOTE: https://myaccount.google.com/lesssecureapps need to go and allow permission
    auth: {
      user: Credential.USER,
      pass: Credential.PASS
    }
  });
  let mailOptions = {
    from: `"Your Contact " <${Credential.USER}>`,
    to: 'mdalamin6555@gmail.com',
    subject: 'Your Subject Here',
    html: output
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      res.json(err)
    else
      res.json(info)
  });
})

app.use('/', router)
app.listen(3000, () => console.log("Server Started...."))