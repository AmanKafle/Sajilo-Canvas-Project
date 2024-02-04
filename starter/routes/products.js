const express = require('express')
const router = express.Router()

const {getAllProducts,getAllProductsStatic} = require('../controllers/products')


router.route('/products').get(getAllProducts)
router.route('/products/static').get(getAllProductsStatic)


module.exports =router