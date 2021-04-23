const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: [true, 'Please enter quote']
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'Author'
  },
  tags: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Tag'
    }
  ]
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
