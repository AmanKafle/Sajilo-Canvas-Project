const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    userid : {
        type: String,
        required:[true, 'must have a userid']
    },
    imgurl : {
        type : String,
        required:[true, 'must have a screenchot']
    },
    status:{
        type:String,
        enum:{
            values:['Pending','Success']},default: "Pending"}
    
        

})
module.exports = mongoose.model("Payment", paymentSchema)