const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
  let token = req.headers["x-authorization"].split(" ")[1];
  
  if(!token){
    res.status(403).json({
      success: false,
      msg: "Unauthorised.."
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if(!error || decoded.pin && decoded.expire){
        
        req.user = {
          pin: decoded.pin,
          expire: decoded.expire
        }
        next();
      } else {
        res.status(403).json({
          success: false,
          msg: "Unauthorised.."
        });
      }
    })
  }
}

module.exports = authCheck;