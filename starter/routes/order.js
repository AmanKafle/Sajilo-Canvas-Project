const express = require('express')
const router = express.Router();

const {   createorder,
    orderinfo} = require('../controllers/order')
    const {deleteorderedcart} = require("../controllers/cart")
const authMiddleware = require('../middleware/authentication')
const adminAuthHandler = require('../middleware/adminAuthHandler')

router.route('/order').post(authMiddleware, createorder).delete(authMiddleware, deleteorderedcart)
router.route('/orderhistory').get(authMiddleware, orderinfo);

module.exports = router;