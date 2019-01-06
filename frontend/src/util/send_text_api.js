var AWS = require('aws-sdk');
var schedule = require('node-schedule');
require('dotenv').config()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

AWS.config.update({ region: 'us-west-2' });
var sns = new AWS.SNS();

// example params
var params = {
  Message: 'Time to update your achievements on Rise!',
  MessageStructure: 'string',
  // PhoneNumber: '+15106038483'
  PhoneNumber: '+18313453689'
};

//This sends the text message via aws SNS
sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


var rule = new schedule.RecurrenceRule();

// example of rules for Saturday at 3:40pm
rule.dayOfWeek = 7
rule.hour = 12;
rule.minute = 48;
 
//this part sends messages on a recurring schedule
// var j = schedule.scheduleJob(rule, function(){
//   console.log('The scheduler worked');
// });
// var j = schedule.scheduleJob(rule, sns.publish(params).bind(this));

// j();
// Cancels the scheduled messages
// j.cancel();