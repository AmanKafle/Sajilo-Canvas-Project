const express = require("express");
const authMiddleware = require("../middleware/authentication");

const router = express.Router();
const {
  addToCart,
  getAllCart,
  deleteCartItem,
} = require("../controllers/cart");
router
  .route("/")
  .post(authMiddleware, addToCart)
  .get(authMiddleware, getAllCart);
router.route("/:id").delete(authMiddleware, deleteCartItem);

module.exports = router;
