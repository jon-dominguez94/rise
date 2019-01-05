require("dotenv").config();

const AWS = require("aws-sdk");
const ses = new AWS.SES();

var params = {
  EmailAddress: "mark.kopec@gmail.com",
  TemplateName: "RiseEmailTemplate"
};
ses.sendCustomVerificationEmail(params, function(err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});

