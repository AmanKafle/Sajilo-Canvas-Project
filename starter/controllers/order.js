const Order = require('../models/order')
const Product = require('../models/product')

const orderinfo = async (req,res) =>{
    id = req.user._id
    const order = await Order.find({userid : id},{adress:0, PhoneNo:0})
    res.json({order})
    
}
const createorder = async(req,res)=>{
    const Neworder = await Order.create({...req.body,userid:req.user._id})
    res.json({Neworder})
}



module.exports = {
    createorder,
    orderinfo
}