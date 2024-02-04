const mongoose = require('mongoose')
const CartSchema = new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      products: [
        {
          productId: Number,
          quantity: Number,
          name: String,
          price: Number
        }
      ],
    }
  )
  
module.exports = mongoose.model ('Cart', CartSchema)