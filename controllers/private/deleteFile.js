const User = require("../../db/schema/peopleSchema");

const deleteFile = async (req, res) => {
  let { id } = req.params;
  let { pin } = req.user;
  
  try {
    const response = await User.findOneAndUpdate({ pin: pin }, {
      $pull: {
        files: {id: id},
      }
    }, { new: true })
    
    if(response){
      res.json({
        success: true,
        msg: "Successfully Deleted"
      })
    } else {
      res.json({
        success: false,
        msg: "Failed To Delete"
      })
    }
  } catch (e) {
    console.log(e.message)
    res.json({
      success: false,
      msg: e.message
    })
  }
}

module.exports = {
  deleteFile
}