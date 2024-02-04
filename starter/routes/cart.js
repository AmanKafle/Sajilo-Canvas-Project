const express = require('express')
const authMiddleware = require('../middleware/authentication')

const router = express.Router()
 const {addToCart} = require('../controllers/cart')
 router.route('/').post(authMiddleware,addToCart)
//  router.route('/removefromcart').post()

module.exports = router