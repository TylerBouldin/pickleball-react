const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  skillLevel: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  organizer: {
    type: String,
    default: ''
  },
  contactEmail: {
    type: String,
    default: ''
  },
  averageAttendance: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Group', groupSchema);

