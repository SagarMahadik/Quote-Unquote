const Tag = require('../../models/Quote-Unquote/Tag.js');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.createTag = factory.createOne(Tag);

exports.getAllTags = factory.getAll({ Model: Tag, cacheKey: 'tags' });
