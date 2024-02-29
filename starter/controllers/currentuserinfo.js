const User = require ('../models/user')
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");
const currentUserInfo = async (req, res) => {
  const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new UnauthenticatedError("Authentication invalid1");
    }
    try {
      const payload = jwt.verify(
        req.headers.cookie.split("=")[1],
        process.env.JWT_SECRET
      );
      if(payload.id=="admin"){
        res.json({
          role:"admin",
        })

      }
    const freshUser = await User.findById(payload.id);
    res.json(freshUser)
 
    } catch (error) {
      throw new UnauthenticatedError("Authentication invalid");
    }
  
    // try {
   
    // } catch (err) {
    //   console.error('Error retrieving user:', err);
    //   res.status(500).json({ error: 'Internal server error' });
    // }
  };
  module.exports = {
    currentUserInfo
  }
  