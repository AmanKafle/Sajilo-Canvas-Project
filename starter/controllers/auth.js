const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const jwt =require("jsonwebtoken")
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token =jwt.sign({hi:2},"secret")

  console.log(token);
  res.cookie('jwt',token,{httpOnly:true,maxAge:3600000})

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.cookie('jwt',token,{sameSite:'None',httpOnly:false,  secure:true,maxAge:3600000})
   res.status(StatusCodes.OK).json({ user: { name: user.name }, token,hello:"hi" })
}

module.exports = {
  register,
  login,
}
