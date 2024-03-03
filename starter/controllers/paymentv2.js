const axios =require("axios");
const Payment = require('../models/payment')

const payments = async(req,res)=>{
    const payload=req.body;
    const khaltiResponse=await axios.post("https://a.khalti.com/api/v2/epayment/initiate/",payload,{
        headers:{
            Authorization:`key a215718fae8e4e1887298cef087c9c75`
        }
    })
    res.json({
        success:true,
        data:khaltiResponse?.data
    })
    const payment = await Payment.create({...req.body, userid:req.user._id})
    res.json({payment})
}
const confirmation=async(req,res)=>{
    const pidx=req.body.pidx;
    try{

        const khaltiResponse=await axios.post("https://a.khalti.com/api/v2/epayment/lookup/",{
            pidx:pidx,
        },{
            headers:{
                Authorization:`key a215718fae8e4e1887298cef087c9c75`
            }
        })
        res.json({
            success:true,
            data:khaltiResponse?.data
        })
    }catch(err){
        console.log(err);
        res.stats(400).json({err:err})
    }
}
module.exports ={
    payments,
    confirmation
}