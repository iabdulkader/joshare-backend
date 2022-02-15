const User = require("../../db/schema/peopleSchema");

const deleteFile = async (req, res) => {
  let { id } = req.params;
  let { pin } = req.user;
  
  res.json({hello: "world"})
}

module.exports = {
  deleteFile
}