const User = require("../../db/schema/peopleSchema");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const addTime = async (req, res) => {
  let { pin, expire: prevExpire } = req.user;
  let hour = req.body.hour;
  
  try {
    const response = await User.findOneAndUpdate({
      pin: pin, 
      timeChangeNum: { $gte: 1 }
    }, 
    { 
      $inc: {
        timeChangeNum: -1
      },
      $set : {
        expire: moment(prevExpire).add(hour, "hours").toDate()
      }
    }, {new: true})
    
    if(!response) {
      res.status(401).json({
        success: false,
        msg: "Limit of time adding exceeded"
      })
    } else {
      let newToken = jwt.sign({
        pin,
        expire: response.expire,
        exp: Math.floor(Date.parse(response.expire) / 1000),
        addTimeNum: response.addTimeNum
      }, process.env.JWT_SECRET)
      
      res.status(200).json({
        token: newToken,
        expire: response.expire,
        addTimeNum: response.addTimeNum
      })
    }
  } catch (e) {
    console.log(e.message)
    res.status(500).json({
      success: false,
      msg: "Uncaught Error found."
    })
  }
}

module.exports = {
  addTime
}