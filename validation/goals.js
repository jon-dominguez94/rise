const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';

  if(!Validator.isLength(data.title, {min: 5, max: 30})) {
    errors.title = 'Title must be between 5 and 30 characters';
  }

  if(Validator.isEmpty(data.title)){
    errors.title = 'Title field is required';
  }

  if(!Validator.isLength(data.description, {min: 5, max: 200})) {
    errors.description = 'Description must be between 5 and 200 characters';
  }

  if(Validator.isEmpty(data.description)){
    errors.description = 'Description field is required';
  }
};