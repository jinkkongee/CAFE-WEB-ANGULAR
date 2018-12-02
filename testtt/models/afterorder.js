const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const AfterorderSchema = mongoose.Schema({
  menu: {
    type: String
  },
  number: {
    type: String,
    required: true
  },
  takeout: {
    type: String,
    required: true
  },
  timeofarrival: {
    type: String,
    required: true
  }
});

const Aferorder = module.exports = mongoose.model('Afterorder', AfterorderSchema);