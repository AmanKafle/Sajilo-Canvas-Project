const express = require('express')
const router =express.Router()
const{currentUserInfo} = require('../controllers/currentuserinfo')
const adminAuthMiddleware = require('../middleware/adminAuthHandler')
const authMiddleware = require('../middleware/authentication')
router.route('/me').get(authMiddleware, currentUserInfo)
module.exports = router ; 