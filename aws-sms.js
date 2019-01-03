var AWS = require('aws-sdk');
require('dotenv').config()
// AWS.config.region = 'us-west-2';
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
var sns = new AWS.SNS();

var params = {
  Message: 'Rise: Your career is calling!',
  MessageStructure: 'string',
  PhoneNumber: '+18313453689'
};

sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});