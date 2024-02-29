const Projectinfo = require("../models/projectinfo")

const projectinfo = async (req, res) => {
    const project = await Projectinfo.create({ ...req.body });
    res.json({project , status: ' Success'})
}
module.exports = {
    projectinfo
}
