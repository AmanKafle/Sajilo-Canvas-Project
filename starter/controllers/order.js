const Order = require('../models/order')
const Product = require('../models/product')

const orderinfo = async (req,res) =>{
    id = req.user._id
    const order = await Order.find({userId : id})
    res.json({order})
    
}
const createorder = async(req,res)=>{
    const Neworder = await Order.create({...req.body,userId:req.user._id})
    res.json({Neworder})
}



module.exports = {
    createorder,
    orderinfo
}