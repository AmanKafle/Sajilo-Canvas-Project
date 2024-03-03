const express = require('express')
const router = express.Router();

const {createorder,productupdate,orderinfo} = require('../controllers/order')
const authMiddleware = require('../middleware/authentication')
const adminAuthHandler = require('../middleware/adminAuthHandler')

router.route('/order').post(authMiddleware, createorder);
router.route('/orderhistory').get(authMiddleware, orderinfo);

model.exports = router;