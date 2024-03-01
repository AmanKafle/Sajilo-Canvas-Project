const Projectinfo = require('../models/projectinfo')



const getallproject = async(req,res) =>
{
    const email= req.user.email;
    const project = await Projectinfo.find({forwardedto: email});
    res.json({project});
}
const editImg = async(req,res) =>
{
// {
//     projectId:"",
//     rooms:[
//         {
//             id:"",
//              imgurl:"",
//             editedurl:[""],
//         }
//     ]
// progress:""
// }

const project = await Projectinfo.findOneAndUpdate(
     {_id:req.body.projectId },
    { $set :{
        rooms :[... req.body.rooms],
        progress: req.body.progress
    }},
    {new : true})


    res.json({project});
}

module.exports ={
    getallproject,editImg

}