const User = require("../../db/schema/peopleSchema");
const emailSender = require("../../lib/services/emailService");
const emailTemplate = require("../../lib/services/emailTemplate");
const getExpireTime = require("../../lib/utilities/getExpireTime");


const sendEmail = async (req, res) => {
  let { pin, expire } = req.user;
  let { from, to } = req.body;
  let emailFrom = from === "" ? "joShare" : from;
  
  try {
    let user = await User.findOne({ pin: pin});
    if(!user) {
      res.status(404).json({
        success: false,
        msg: "User Not Found"
      });
    } else {
      if (user.emailSendNum < 1) {
        res.status(203).json({
          success: false,
          msg: "Email Sending Limit Exceeded."
        });
      } else {
        let emailResponse = await emailSender({
          from: "contact.joshare@gmail.com",
          to,
          subject: 'joShare file sharing',
          text: `${emailFrom} shared some files with you`,
          html: emailTemplate({
            from: emailFrom,
            link: `${process.env.CLIENT_URL}/files/${pin}`,
            expires: getExpireTime(expire),
          })
        });
        if(emailResponse.accepted.length > 0){
          let dbRes = await User.findOneAndUpdate({
            pin: pin
          },
          {
            $inc: {
              emailSendNum: -1
            }
          }, { new: true })
          
          if(dbRes){
            res.status(200).json({
              success: true,
              emailSendNum: dbRes.emailSendNum,
              msg: "Email have sent successfully."
            })
          } else {
            res.json({
              success: false,
              msg: "Email Sending Failed"
            })
          }
          
        } else {
          res.json({
            success: false,
            msg: "Email Sending Failed"
          })
        }
      }
    }
  } catch (e) {
    console.log("error:", e.message);
    res.json({
      success: false,
      msg: "Uncaught Error"
    })
  }
}

module.exports = {
  sendEmail
}