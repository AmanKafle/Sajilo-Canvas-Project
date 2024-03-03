const mongoose = require ('mongoose')

const orderSchema = new mongoose.Schema({
    Fullname :{
        type:String,
        required : [true , 'Must have a UserName.'],


    },   Email :{
        type:String,
        required : [true , 'Must have a Email.'],


    },
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

        },
    PhoneNo: {
        type : Number ,
        required : [true , 'Must have a phone No.']
    },
    status:{
        type: String,
        enum:{
            values:['Pending', 'success'],
            default:'Pending'
        }

    },
    userId: {
        type: String,
        
      },
      products: [
        {
          productId: {
            type:String,
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
    
module.exports = mongoose.model('Order', orderSchema)