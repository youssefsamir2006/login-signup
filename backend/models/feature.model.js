const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const featureSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
}, {
  timestamps: true,
});

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;
