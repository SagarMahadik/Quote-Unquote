const express = require('express');
const quoteController = require('../../controllers/Quote-Unquote/quoteController');
//const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(quoteController.getAllQuotes);

router.route('/').post(quoteController.createQuote);

router.route('/:id').patch(quoteController.updateQuote);

module.exports = router;
