const mongoose = require('mongoose');

const courtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  hours: {
    type: String,
    required: true
  },
  courts: {
    type: String,
    required: true
  },
  amenities: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  parking: {
    type: String,
    required: true
  },
  fees: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Court', courtSchema);

