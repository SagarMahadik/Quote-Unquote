const express = require('express');
const tagController = require('../../controllers/Quote-Unquote/tagController');
//const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(tagController.getAllTags);

router.route('/').post(tagController.createTag);

module.exports = router;
