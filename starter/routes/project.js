const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authentication");
const adminAuthMiddleware = require('../middleware/adminAuthHandler');

const {projectinfo,forwardedinfo,projectupdate} = require('../controllers/projectpage')

router.route('/upload').post(authMiddleware, projectinfo);
router.route('/admin/forward').post(adminAuthMiddleware,forwardedinfo);
router.route('/projectupdate').get(authMiddleware, projectupdate);


module.exports = router ;