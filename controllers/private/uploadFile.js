const User = require("../../db/schema/peopleSchema");

const uploadFile = async (req, res) => {
  let { pin } = req.user;
  let {id, url, name, ext, size} = req.body;
  if(!id || !url || !name || !ext || !size ) {
    res.status(402).json({
      success: false,
      msg: "All fields are required."
    })
  }
  
  try {
    const response = await User.findOneAndUpdate({ pin: pin }, {
      $push: {
        files: {
          id,
          fileName: name,
          extName: ext,
          size,
          downloadUrl: url
        }
      }
    }, { new: true })
    console.log(response)
    if(response){
      res.status(200).json({
        success: true,
        msg: "Upload Successful."
      })
    } else {
      res.json({
        success: false,
        msg: "Error while saving data"
      })
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      success: false,
        msg: "Uncaught Error"
    })
  }
}

module.exports = {
  uploadFile
}