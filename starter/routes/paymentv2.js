const express = require('express')
const router = express.Router()

const {payments,confirmation} = require('../controllers/paymentv2')
const authMiddleware = require('../middleware/authentication')

router.route('/payment').post(authMiddleware, payments)
router.route('/payment/confirm').post(authMiddleware, confirmation)


module.exports = router;

