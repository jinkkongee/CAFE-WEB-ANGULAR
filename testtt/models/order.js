const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const OrderSchema = mongoose.Schema({
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

const Order = module.exports = mongoose.model('Order', OrderSchema);