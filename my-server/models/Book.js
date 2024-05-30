const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number },
  description: { type: String },
  dateAdded: { type: Date, default: Date.now },
  review: { type: String }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;