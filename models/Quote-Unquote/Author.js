const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, 'Please enter author name']
  },
  authorImageUrl: {
    type: String,
    default: ''
  },
  authorBio: {
    type: String,
    default: ''
  },
  authorTag: {
    type: String,
    default: ''
  },
  createdAt: {
    type: String
  }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
