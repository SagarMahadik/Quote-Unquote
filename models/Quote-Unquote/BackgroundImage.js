const mongoose = require('mongoose');

const backgroundImageSchema = new mongoose.Schema({
  backgroundImageUrl: {
    type: String,
    required: [true, 'Please enter url']
  }
});

const BackgroundImage = mongoose.model(
  'BackgroundImage',
  backgroundImageSchema
);

module.exports = BackgroundImage;
