const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  tech: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('logs', LogSchema);
