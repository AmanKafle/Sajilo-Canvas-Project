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
        editedurl:{
            type:[String],
            
        },
     description: String
    }],
    blueprintURL: {
        type: String,
        required: [ true, 'must have a blueprint']
    },
    progress:{
        type: String,
        enum:{
            values:['Pending','Completed']},default: "Pending"},
    userid:{
        type: String,
        required: [ true, 'must have a userId']
    },
    forwardedto: String,


})
module.exports = mongoose.model('Projectinfo' , projectSchema)