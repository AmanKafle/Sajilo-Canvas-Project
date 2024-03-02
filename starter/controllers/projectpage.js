const Projectinfo = require("../models/projectinfo")
const util = require('util')


const projectinfo = async (req, res) => {
    const project = await Projectinfo.create({ ...req.body,userid:req.user._id });
    res.json({project , status: ' Success'})

}
const projectupdate = async(req,res)=>{
    id = req.user._id
    let projects1 = await Projectinfo.find({userid : id,$or:[{progress:"Pending"},{progress:"completed"}]},{rooms:{ editedurl :0}});
    let projects2 = await Projectinfo.find({userid : id,progress:"Delivered"});

    res.json([...projects1,...projects2])
    console.log(projects1);
    // console.log(projects);
    // projects.forEach(async(project)   => {
    //     console.log(project.progress);
    //     if (project.progress == "Delivered"){
    //         res.json({projects})
    //     }

    //     else if(project.progress == "Pending" || "completed" ){

    //     }
   
    
    //     projects =await  Projectinfo.find({userid: id}, {rooms:{ editedurl :0}})
    //     res.json(projects)
        
        
        
    //     })
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
