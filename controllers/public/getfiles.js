const User = require("../../db/schema/peopleSchema");


const getfiles = async (req, res) => {
  
  try {
    let user = await User.findOne({ pin: req.params.pin })
    if(!user){
      res.status(404).json({
        success: false,
        msg: "User not found"
      })
    } else {
      res.json(user)
    }
  } catch (e) {
    console.log(e.message)
    res.json({
      msg: e.message
    })
  }
  
}

module.exports = {
  getfiles
}