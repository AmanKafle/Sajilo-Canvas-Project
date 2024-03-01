const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid1");
  }

  try {
    const payload = jwt.verify(
      req.headers.cookie.split("=")[1],
      process.env.JWT_SECRET
    );
    const freshUser = await User.findById(payload.id);
    if(freshUser.role!="Designer"){
        throw new UnauthenticatedError("Authentication invalid1");
    }
    req.user = freshUser;
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};
module.exports = auth ;