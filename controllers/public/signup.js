const jwt = require("jsonwebtoken");
const customId = require("custom-id");
const User = require("../../db/schema/peopleSchema");

// sign up or register controller
const signup = async (req, res) => {
  const newPin = customId({
    name: "12345",
    email: "67890"
  });
  
  try {
    const newUser = new User({ 
      pin: newPin,
      expire: Date.now() + 86400000
    });
    const { pin, expire } = await newUser.save();
    
    let token = jwt.sign({
      pin,
      expire
    }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    })
    
    res.json({
      success: "true",
      token
    })
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  signup
}