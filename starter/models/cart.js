const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
      name: String,
      price: Number,
      img_url: String,
      //    productId: data.id,
      // quantity,
      // name: data.name,
      // price: data.price,
      // img_url: data.img_url,
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);
