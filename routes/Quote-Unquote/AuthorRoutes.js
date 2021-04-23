const express = require('express');
const authorController = require('../../controllers/Quote-Unquote/authorController');
//const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(authorController.getAllAuthors);

router.route('/').post(authorController.createAuthor);

module.exports = router;
