const Payment = require('../models/payment')

const payments = async(req,res)=>{
    const payment = await Payment.create({...req.body, userid:req.user._id})
    res.json({payment})
}
const paymentupdate = async(req,res)=>{
    id = req.user._id
    
    let payments = await Payment.find({userid : id, status: "Success"});
   
    
    res.json({payments})
     
    
}

module.exports ={
    payments,
    paymentupdate
}