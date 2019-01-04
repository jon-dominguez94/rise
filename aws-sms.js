var AWS = require('aws-sdk');
var schedule = require('node-schedule');
require('dotenv').config()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
var sns = new AWS.SNS();

var params = {
  Message: 'Time to update your achievements on Rise!',
  MessageStructure: 'string',
  PhoneNumber: '+12345678910'
};

sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

// // Weekly timer
// const weeklyInterval = setInterval(reminderFunc, 604800000)

// // Daily timer
// const dailyInterval = setInterval(reminderFunc, 86400000)

// // BiWeekly timer
// const BiWeeklyIntervale = setInterval(reminderFunc, 1209600000)

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 5
rule.hour = 16;
rule.minute = 0;
 
var j = schedule.scheduleJob(rule, function(){
  console.log('Today is recognized by Rebecca Black!');
});

// var j = schedule.scheduleJob(`* * ${hour} * ${day}`, function(){
//   console.log('The answer to life, the universe, and everything!');
// });