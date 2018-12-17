const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/User');
//앱용 res.send("success"); 메시지받기
router.post('/regi', function(req, res, next) {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
        res.send("success");
      //res.json({success: true, msg:'User registered'})
    }
  });
});
//웹용 res.json
router.post('/register', function(req, res, next) {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
                //res.send("success");
      res.json({success: true, msg:'User registered'})
    }
  });
});

router.post('/login', function(req, res, next) {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
});

//=======================================>

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================<
//웹용 res.json 토큰받아오기
router.post('/authenticate', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    // if(err) throw err;
    if(!user) {
      return res.json({success:false, msg:'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      // if(err) throw err;W
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800  // 1 week in seconds
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg:'Wrong password'});
      }
    })
  })
});
//앱용 res.end("success"); 메시지받기
router.post('/auth', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    // if(err) throw err;
    if(!user) {
      return res.json({success:false, msg:'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      // if(err) throw err;W
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800  // 1 week in seconds
        });
          res.send("success");
        /*res.json(
          {
          success: true,
          token: 'JWT '+token,
          user: {
            //id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password
          }
        }
      );*/
      } else {
        return res.json({success: false, msg:'Wrong password'});
      }
    })
  })
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

//==================================================>

module.exports = router;
