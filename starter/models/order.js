const mongoose = require ('mongoose')

const orderSchema = new mongoose.Schema({
    address:[{
        District: {
            type: String,
            required: [true, 'Must have a district']

        },
        City: {
            type: String,
            required: [true, 'Must have a city']

        },
        Pickuppoint: {
            type: String,
            required: [true, 'Must have a pickup point']

        }
    }],
    PhoneNo: {
        type : Number ,
        required : [true , 'Must have a phone No.']
    },
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
        }],
    totalamount : Number
    })
    
module.export = mongoose.model('Order', orderSchema)