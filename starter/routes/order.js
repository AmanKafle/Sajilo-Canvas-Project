const express = require('express')
const router = express.Router();

const {   createorder,
    orderinfo} = require('../controllers/order')
const authMiddleware = require('../middleware/authentication')
const adminAuthHandler = require('../middleware/adminAuthHandler')

router.route('/order').post(authMiddleware, createorder);
router.route('/orderhistory').get(adminAuthHandler, orderinfo);

module.exports = router;