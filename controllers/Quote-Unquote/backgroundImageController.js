const BackgroundImage = require('../../models/Quote-Unquote/BackgroundImage.js');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.createBackgroundImage = factory.createOne(BackgroundImage);

exports.getAllBackgroundImages = factory.getAll(BackgroundImage);
