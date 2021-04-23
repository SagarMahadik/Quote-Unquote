const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, 'Please enter author name']
  }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
