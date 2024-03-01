const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authentication");
const adminAuthMiddleware = require('../middleware/adminAuthHandler');

const {projectinfo,forwardedinfo} = require('../controllers/projectpage')

router.route('/upload').post(authMiddleware, projectinfo);
router.route('/forward').post(adminAuthMiddleware,forwardedinfo);


module.exports = router ;