const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReminderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  emailReminder: {
    type: Boolean,
    default: true
  },
  smsReminder: {
    type: Boolean,
    default: true
  },
  remindOnDay: {
    type: Number,
    default: 5
  },
  remindOnHour: {
    type: Number,
    default: 17
  },
  date: {
    type: Date,
    default: Date.now
  }
});


const Reminder = mongoose.model("reminder", ReminderSchema);
module.exports = Reminder; 