const Author = require('../../models/Quote-Unquote/Author.js');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.createAuthor = factory.createOne(Author);

exports.getAllAuthors = factory.getAllAuthorDetails({
  Model: Author,
  cacheKey: 'authors'
});
