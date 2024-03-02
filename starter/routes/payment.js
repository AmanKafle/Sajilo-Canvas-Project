const express = require('express')
const router = express.Router()

const {payments,paymentupdate} = require('../controllers/payment')
const authMiddleware = require('../middleware/authentication')

router.route('/payment').post(authMiddleware, payments)
router.route('/paymentupdate').get(authMiddleware, paymentupdate)

module.exports = router;

