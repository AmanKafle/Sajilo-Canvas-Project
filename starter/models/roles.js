const mongoose = require('mongoose')


const roleschema = new mongoose.schema({
    role : {
        type: String,
        enum:{
            values :['Admin','Designer','User']
        }
    }

})
module.exports = mongoose.model('Role', roleschema)