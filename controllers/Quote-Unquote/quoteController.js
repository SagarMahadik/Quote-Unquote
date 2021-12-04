const Quote = require('../../models/Quote-Unquote/Quote.js');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.createQuote = factory.createOne(Quote);

exports.getAllQuotes = factory.getAll({
  Model: Quote,
  cacheKey: 'quotes'
});

exports.updateQuote = factory.updateOne(Quote);

exports.deleteQuote = factory.deleteOne(Quote);
