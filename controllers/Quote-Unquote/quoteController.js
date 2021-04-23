const Quote = require('../../models/Quote-Unquote/Quote.js');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.createQuote = factory.createOne(Quote);

exports.getAllQuotes = factory.getAllQuotes(Quote, 'author', 'tags');
