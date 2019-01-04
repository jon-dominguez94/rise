// const Validator = require('validator');
// const validText = require('./valid-text');

// module.exports = function validateRegisterInput(data) {
//   let errors = {};

//   data.fname = validText(data.fname) ? data.fname : '';
//   data.lname = validText(data.lname) ? data.lname : '';
//   data.email = validText(data.email) ? data.email : '';
//   data.password = validText(data.password) ? data.password : '';
//   data.password2 = validText(data.password2) ? data.password2 : '';
//   data.phone = validText(data.phone) ? data.phone : '';

//   if (Validator.isEmpty(data.fname)) {
//     errors.fname = 'First name field is required';
//   }

//   if (Validator.isEmpty(data.lname)) {
//     errors.lname = 'Last name field is required';
//   }

//   if (!Validator.isEmail(data.email)) {
//     errors.email = 'Email is invalid';
//   }
// };