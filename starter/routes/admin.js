const express = require('express')
const router = express.Router()
const adminAuthMiddleware = require('../middleware/adminAuthHandler')
const {productHandler, deleteProduct,createProduct,editProduct,getallproject} = require('../controllers/adminpanel')

router.route('/products').get(adminAuthMiddleware, productHandler);
router.route('/product/:id').delete(adminAuthMiddleware, deleteProduct).put(adminAuthMiddleware, editProduct);
router.route('/product').post(adminAuthMiddleware, createProduct);
router.route('/projects').get(adminAuthMiddleware, getallproject);


module.exports = router