const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authentication");
const {projectinfo} = require('../controllers/projectpage')

router.route('/upload').post( projectinfo);

module.exports = router ;