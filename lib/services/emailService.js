const nodemailer = require("nodemailer");
require("dotenv").config();

async function emailSender({ from, to, subject, text, html }) {
  
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
  
  let info = await transporter.sendMail({
    from: `joShare <${from}>`,
    to,
    subject,
    text,
    html
  })
  
  return info;
}

module.exports = emailSender;