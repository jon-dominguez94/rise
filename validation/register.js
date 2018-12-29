const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.fname = validText(data.fname) ? data.fname : '';
  data.lname = validText(data.lname) ? data.lname : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  data.phone = validText(data.phone) ? data.phone : '';

  if(Validator.isEmpty(data.fname)){
    errors.fname = 'First name field is required';
  }

  if(Validator.isEmpty(data.lname)){
    errors.lname = 'Last name field is required';
  }
  
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if(!Validator.equals(data.password, data.password2)){
    errors.password2 = 'Passwords must match';
  }
  
  if(!Validator.isMobilePhone(data.phone, 'en-US')){
    errors.phone = 'iPhone is invalid';
  }

  if(Validator.isEmpty(data.phone)){
    errors.phone = 'Phone number is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};