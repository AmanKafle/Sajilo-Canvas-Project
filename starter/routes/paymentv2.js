const express = require('express')
const router = express.Router()

const {payments} = require('../controllers/paymentv2')
const authMiddleware = require('../middleware/authentication')

router.route('/payment').post(authMiddleware, payments)

module.exports = router;

