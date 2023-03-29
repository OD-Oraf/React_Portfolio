const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const path = require('path')

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});


var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
};
var transporter = nodemailer.createTransport(smtpConfig);

app.post('/send', (req, res) => {
    const { name, email, message, subject } = req.body
    transporter.sendMail({
        to:'devonxora@gmail.com',
        from: email,
        subject:subject,
        html:`<p>${email}</p>
        <h3>${name}</h3>
        <p>${message}</p>`
    }).then(resp => {
        res.json({resp})
    })
    .catch(err => {
        console.log(err)
    })
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

