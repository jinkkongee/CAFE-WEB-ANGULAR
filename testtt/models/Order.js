const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const orderSchema = mongoose.Schema({

  username: {
    type: String,
    required: true
  },

  menu: {
    type: String,
    required: true
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

var Order = mongoose.model("order",orderSchema);
module.exports = Order;

module.exports.getOrderById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getOrderByOrdername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}
module.exports.addOrder = function(newOrder, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newOrder.password, salt, (err, hash) => {
      //if(err) throw err;
      newOrder.password = hash;
      newOrder.save(callback);
    });
  });
}
module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    //if(err) throw err;
    callback(null, isMatch);
  });
}
