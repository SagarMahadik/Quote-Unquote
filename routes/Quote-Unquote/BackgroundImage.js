const express = require('express');
const backgroundImageController = require('../../controllers/Quote-Unquote/backgroundImageController');
//const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(backgroundImageController.getAllBackgroundImages);

router.route('/').post(backgroundImageController.createBackgroundImage);

module.exports = router;
