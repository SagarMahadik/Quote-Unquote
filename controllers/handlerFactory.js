const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');
const { populate } = require('../models/recipeModel');
const { promisify } = require('util');
const redis = require('redis');

const setRedisClient = () => {
  if (process.env.NODE_ENV === 'production') {
    return redis.createClient(process.env.REDIS_URL);
  } else {
    return redis.createClient();
  }
};

const redisClient = setRedisClient();

const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.createLog = Model =>
  catchAsync(async (req, res, next) => {
    //const doc = await Model.create(req.body);
    res.status(201).json({
      status: 'success'
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    if (Model === 'Log') {
      res.status(201).json({
        status: 'success'
      });
    } else {
      const doc = await Model.create(req.body);

      res.status(201).json({
        status: 'success',
        data: {
          data: doc
        }
      });
    }
  });

exports.getSearchOutcomes = (Model, fieldsString) =>
  catchAsync(async (req, res, next) => {
    var searchString = new RegExp(req.query.q, 'i');

    let selectFields = {};
    selectFields = fieldsString;

    const results = Model.find({
      $or: [
        { firstName: { $regex: searchString } },
        { lastName: { $regex: searchString } }
      ]
    })
      .select(selectFields)
      .limit(5);
    const doc = await results;

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

// This Route return the only selected fields

exports.getAll = ({ Model, popOptions, popOption1, fieldsString, cacheKey }) =>
  catchAsync(async (req, res, next) => {
    const reply = await getAsync(cacheKey);
    if (reply) {
      console.log(`using cached ${cacheKey} data`);
      res.status(200).json({
        status: 'success',
        results: reply.length,
        data: {
          data: JSON.parse(reply)
        }
      });
      return;
    }
    let filter = {};
    if (req.params.userID) filter = { userID: req.params.userID };

    let selectFields = {};

    let features = Model.find(filter);
    selectFields = fieldsString;

    if (popOptions)
      features = Model.find(filter)
        .populate(popOption1)
        .populate(popOptions)
        .select(selectFields);
    // const doc = await features.query.explain();

    const doc = await features;

    const saveResults = await setAsync(cacheKey, JSON.stringify(doc), 'EX', 60);
    console.log(`new ${cacheKey} data cached`);

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

exports.getAllWithSelectedFields = (Model, fieldsString) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.userID) filter = { userID: req.params.userID };

    let selectFields = {};

    selectFields = fieldsString;
    let features = Model.find(filter).select(selectFields);

    // const doc = await features.query.explain();

    const doc = await features;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

exports.getRecipe = (Model, popOption1, popOption2, popOption3) =>
  catchAsync(async (req, res, next) => {
    //console.log(Model);
    let filter = {};
    let selectFields = {};
    if (req.params.userID) filter = { userID: req.params.userID };
    let features = Model.find(filter);

    if (popOption1)
      features = Model.find(filter)
        .lean()
        .populate(popOption1)
        .populate(popOption2)
        .populate(popOption3);

    // const doc = await features.query.explain();

    const doc = await features;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

exports.getBasicRecipes = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    //console.log(Model);
    let filter = {};
    let selectFields = {};
    if (req.params.userID) filter = { userID: req.params.userID };
    let features = Model.find(filter);

    if (popOptions) features = Model.find(filter).populate(popOptions);

    // const doc = await features.query.explain();

    const doc = await features;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.showAll = Model =>
  catchAsync(async (req, res, next) => {
    let filter = {};

    if (req.params.variety) filter = { delicacyVariety: req.params.variety };
    if (req.params.category) filter = { delicacyVariety: req.params.category };
    if (req.params.additionalInformation)
      filter = { additionalInformationType: req.params.additionalInformation };
    if (req.params.addonType) filter = { addOnType: req.params.addonType };

    const features = Model.find(filter);

    // const doc = await features.query.explain();
    const doc = await features;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

exports.showAllDelicacies = Model =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {};
    if (req.params.variety) filter = { variety: req.params.variety };

    const features = Model.find(filter);

    // const doc = await features.query.explain();
    const doc = await features;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

exports.addNewData = (Model, fieldTobeUpdated) =>
  catchAsync(async (req, res, next) => {
    let query = {};

    switch (fieldTobeUpdated) {
      case 'books':
        query = { books: req.body.books };
        break;
      case 'videos':
        query = { videos: req.body.videos };
        break;
      case 'courses':
        query = { courses: req.body.courses };
        break;
      default:
        console.log('Oops!');
    }

    const doc = await Model.findByIdAndUpdate(req.params.id, {
      $push: query
    });

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });
