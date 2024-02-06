const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
  getOneProduct,
} = require("../controllers/products");

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getOneProduct);
router.route("/products/static").get(getAllProductsStatic);

module.exports = router;
