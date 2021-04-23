const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  tagName: {
    type: String,
    required: [true, 'Please enter tag name']
  }
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
