const Cart = require("../models/cart");
const Order = require("../models/order");
const addToCart = async (req, res) => {
  const { productId, quantity, name, price } = req.body;
  console.log(req.body);
  const userId = req.user._id;
// console.log(req.user._id);
  // console.log(_id, productId, quantity, name, price);
  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      // let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      // if (itemIndex > -1) {
      //   //product exists in the cart, update the quantity
      //   let productItem = cart.products[itemIndex];
      //   productItem.quantity = quantity;
      //   cart.products[itemIndex] = productItem;
      // } else {
      //product does not exists in cart, add new item
      cart.products.push(req.body);
      // }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
        userId,
        products: [{ ...req.body }],
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
const deleteorderedcart = async(req,res)=>{
  const cart = await Cart.findOneAndDelete({_id: req.body.cartid})
    
  res.json({msg:`cart deleted`})
}
const getAllCart = async (req, res) => {
  const userId = req.user._id;
  try {
    let cart = await Cart.findOne({ userId });
    return res.status(201).json({
      success: true,
      carts: cart,
      total: cart.length,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: "Cart Empty",
      error: err,
    });
  }
};
const deleteCartItem = async (req, res) => {
  const userId = req.user._id;
  const id = req.params.id;
  console.log(id);
  try {
    let cart = await Cart.findOne({ userId });
    const newCart = cart.products.filter((s) => s.productId != id);
    cart.products = newCart;
    nayaCart = await cart.save();
    return res.status(201).json({
      success: true,
      carts: nayaCart,
      total: nayaCart.length,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      error: err,
    });
  }
};
module.exports = {
  addToCart,
  getAllCart,
  deleteCartItem,
  deleteorderedcart
};
