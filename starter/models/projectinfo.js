const mongoose = require('mongoose')
 
const projectSchema = new mongoose.Schema({
    roomcount : {
        type:Number,
        required:[true, 'must provide room count']},
    rooms:[{
        imgurl:{
            type:[String],
            required : [true , 'must have a image'],
            
        },
        description: String
    }],
    blueprintURL: {
        type: String,
        required: [ true, 'must have a blueprint']
    }


})
module.exports = mongoose.model('Projectinfo' , projectSchema)