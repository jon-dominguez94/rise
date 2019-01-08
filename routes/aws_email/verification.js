const keys = require('../../config/keys');
const AWS = require("aws-sdk");


AWS.config.update({
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
  region: keys.AWS_REGION
});
AWS.config.update({region: 'us-west-2'})

const ses = new AWS.SES();

var params = {
  EmailAddress: "mark.kopec@gmail.com",
  TemplateName: "RiseEmailTemplate"
};
console.log("Verify email")
ses.sendCustomVerificationEmail(params, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});