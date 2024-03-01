const Projectinfo = require("../models/projectinfo")

const projectinfo = async (req, res) => {
    const project = await Projectinfo.create({ ...req.body,userid:req.user._id });
    res.json({project , status: ' Success'})

}
const projectupdate = async(req,res)=>{
    try {
    id = req.user._id
    let projectuser = await Projectinfo.find({userid : id});
    // res.json({projectuser});
    console.log(projectuser);
            // Fetch projects based on progress value
            
            const progress = req.body.progress;
                projectuser = projectuser.map(project => {
                    if(project.progress==="Delivered"){
                        return project
                    }
                else {
                    let rooms=[...project.rooms]
                    rooms=rooms.map(s=>{
                        return (
                            {
                                ...s,editedurl:[],
                            }
                        )
                    })
                        project.rooms =rooms;
                        console.log(rooms);
                        return project;
                    }
                });
                res.status(200).json({ projectuser,
                    status: 'success'
                });
    
            
    
                
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    };


const forwardedinfo = async(req, res) =>{
    const forwarded = await Projectinfo.findOneAndUpdate( {_id: req.body.id }, { $set :{forwardedto : req.body.email}},{new : true})
      res.json({forwarded})
}


module.exports = {
    projectinfo,
    forwardedinfo,
    projectupdate

}
