const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  tagName: {
    type: String,
    required: [true, 'Please enter tag name']
  },
  tagSVGIcon: {
    type: String,
    default: ''
  }
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
