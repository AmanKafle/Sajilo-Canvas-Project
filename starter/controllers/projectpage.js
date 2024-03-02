const Projectinfo = require("../models/projectinfo")

const projectinfo = async (req, res) => {
    const project = await Projectinfo.create({ ...req.body,userid:req.user._id });
    res.json({project , status: ' Success'})

}
const projectupdate = async(req,res)=>{
    id = req.user._id
    
    let projects = await Projectinfo.find({userid : id,progress: "Delivered"});
   
    
    res.json({projects})
     
    
}

const forwardedinfo = async(req, res) =>{
    const forwarded = await Projectinfo.findOneAndUpdate( {_id: req.body.id }, { $set :{forwardedto : req.body.email}},{new : true})
      res.json({forwarded})
}


module.exports = {
    projectinfo,
    forwardedinfo,
    projectupdate

}
