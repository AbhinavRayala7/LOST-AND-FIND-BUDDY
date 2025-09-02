const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  status: { type: String, enum: ['lost', 'found'], required: true },
  imageUrl: { type: String },
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Item', ItemSchema);