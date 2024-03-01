const express = require('express')
const router = express.Router()
const adminAuthMiddleware = require('../middleware/adminAuthHandler')
const {productHandler, deleteProduct,createProduct,editProduct,getallproject, getalldesigner} = require('../controllers/adminpanel')

router.route('/products').get(adminAuthMiddleware, productHandler);
router.route('/product/:id').delete(adminAuthMiddleware, deleteProduct).put(adminAuthMiddleware, editProduct);
router.route('/product').post(adminAuthMiddleware, createProduct);
router.route('/projects').get(adminAuthMiddleware, getallproject);
router.route('/designers').get(adminAuthMiddleware, getalldesigner);


module.exports = router