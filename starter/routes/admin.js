const express = require('express')
const router = express.Router()
const adminAuthMiddleware = require('../middleware/adminAuthHandler')
const {productHandler, deleteProduct,createProduct,editProduct,getallproject, getalldesigner,projectupdate, getallpayment,paymentverify} = require('../controllers/adminpanel')

router.route('/products').get(adminAuthMiddleware, productHandler);
router.route('/product/:id').delete(adminAuthMiddleware, deleteProduct).put(adminAuthMiddleware, editProduct);
router.route('/product').post(adminAuthMiddleware, createProduct);
router.route('/projects').get(adminAuthMiddleware, getallproject);
router.route('/designers').get(adminAuthMiddleware, getalldesigner);
router.route('/projectupdate').put(adminAuthMiddleware, projectupdate);
router.route('/payments').get(adminAuthMiddleware, getallpayment);
router.route('/paymentverify').put(adminAuthMiddleware, paymentverify);


module.exports = router