var AWS = require('aws-sdk');
var schedule = require('node-schedule');
require('dotenv').config()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
var sns = new AWS.SNS();

// example params
var params = {
  Message: 'Time to update your achievements on Rise!',
  MessageStructure: 'string',
  PhoneNumber: '+12345678910'
};

//This sends the text message via aws SNS
sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


var rule = new schedule.RecurrenceRule();

// example of rules for Friday at 3:00pm
rule.dayOfWeek = 5
rule.hour = 16;
rule.minute = 0;
 
var j = schedule.scheduleJob(rule, function(){
  console.log('The scheduler worked');
});

j.cancel();