const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateUpdateInput(data) {
  let errors = {};

  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  data.phone = validText(data.phone) ? data.phone : '';

  // console.log(data);

  if(!Validator.isEmpty(data.password)){
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = 'Password must be between 6 and 30 characters';
    }

    if (Validator.isEmpty(data.password2)) {
      errors.password2 = 'Confirm Password field is required';
    }

    if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = 'Passwords must match';
    }
  }

  if(!Validator.isEmpty(data.phone)) {
    if (!Validator.isMobilePhone(data.phone, 'en-US')) {
      errors.phone = 'Phone number is invalid';
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};