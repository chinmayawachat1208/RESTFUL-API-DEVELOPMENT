const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  isbn: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: String,
  year: Number,
  category: String,
  totalCopies: { type: Number, default: 1 },
  copiesAvailable: { type: Number, default: 1 },
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
