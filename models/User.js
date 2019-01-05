const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props} is not a valid phone number`
    },
    required: [true, 'User phone number is required']
  },
  emailReminder: {
    type: Boolean,
    default: true
  },
  smsReminder: {
    type: Boolean,
    default: true
  },
  dayOfWeek: {
    type: Number,
    default: 5
  },
  hour: {
    type: Number,
    default: 17
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);