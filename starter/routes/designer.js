const express = require('express')
const router = express.Router()
const designerAuthMiddleware = require("../middleware/designerauthhandler");
const {getallproject,editImg} = require('../controllers/designerpanel')

router.route('/projects').get(designerAuthMiddleware, getallproject);
router.route('/projectupdate').put(designerAuthMiddleware, editImg);

module.exports = router ;