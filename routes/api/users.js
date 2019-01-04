const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys');
const User = require('../../models/User');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validText = require('../../validation/valid-text');

router.get('/test', (req, res) => res.json({msg: "This is the users route"}));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ 
    id: req.user.id,
    fname: req.user.fname,
    lname: req.user.lname,
    email: req.user.email,
    phone: req.user.phone
   });
});

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
  .then(user => {
    if(user){
      return res.status(400).json({ email: 'A user has already registered with this address'});
    } else {
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
      });

      let numbers = newUser.phone.match(/\d+/g).map(Number).join('');
      const finalNum = [numbers.slice(0, 3), numbers.slice(3, 6), numbers.slice(6, 10)];
      newUser.phone = finalNum.join('-');

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
        });
      });
    }
  });
});

router.patch('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  const email = req.body.email;
  console.log(req.body);
  // const { errors, isValid } = validateRegisterInput(req.body);

  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  User.findOne({ email: req.body.email })
    .then(user => {

      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }

      const oldPw = user.password;
      user.fname = validText(req.body.fname) ? req.body.fname : user.fname;
      user.lname = validText(req.body.lname) ? req.body.lname : user.lname;
      user.password = validText(req.body.password) ? req.body.password : user.password;
      // user.password = 'password';
      user.phone = validText(req.body.phone) ? req.body.phone : user.phone;

      if(user.password !== oldPw){
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
          });
        });
      }
      
      user.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }
  
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
  .then(user => {
    if(!user){
      return res.status(404).json({ email: 'This user does not exist' });
    }

    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if(isMatch){
        const payload = { id: user.id, fname: user.fname, lname: user.lname, email: user.email, phone: user.phone };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: 'Incorrect password' });
      }
    });
  });
});

module.exports = router;