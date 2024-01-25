const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must provide a name']
    },
    price:{
        type:Number,
        required:[true, 'must provide a price']
    },
    
    quantity:{
        type:Number,
        default:10

    },
    
    
    
        
    
    category:{
        type: String,
        enum:{
            values:['Furniture','Kitchen','Bathroom','Decor']
        }
    

    },
    img_url:{
        type:String,
        required : [true , 'must have a image']
    },
    features:{
        type: [String],
        required: true
    },
    description:{
        type: String,

    }

})
module.exports = mongoose.model('Product', productSchema)