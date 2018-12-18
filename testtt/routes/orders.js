const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Order = require('../models/Order');

router.post('/order', function(req, res, next) {
  const newOrder = new Order({
    username: req.body.username,
    menu: req.body.menu,
    number: req.body.number,
    takeout: req.body.takeout,
    timeofarrival: req.body.timeofarrival
  });
  Order.addOrder(newOrder, (err, order) => {
    if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
      res.send("success");
      //res.json({success: true, msg:'User registered'})
    }
  });
});
/*
router.post('/order', function(req, res, next) {
  const newOrder = new Order({
    username: req.body.username,
    menu: req.body.menu,
    number: req.body.number,
    takeout: req.body.takeout,
    timeofarrival: req.body.timeofarrival
  });
  Order.addOrder(newOrder, (err, order) => {
    if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
      //res.send("success");
      res.json({success: true, msg:'User registered'})
    }
  });
});
*/
//=======================================>
module.exports = router;
