// import keys from '../../special';
// require("dotenv").config();
const keys = require('../../config/keys')
class AWSEmail {

  constructor(emailAddress) {
    this.emailAddress = emailAddress;
  }

  sendEmail() {
    const AWS = require("aws-sdk");
    AWS.config.update({
      accessKeyId: keys.AWS_ACCESS_KEY_ID,
      secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
      region: keys.AWS_REGION
    });
    AWS.config.update({ region: "us-west-2" });
    const ses = new AWS.SES();

    const params = {
      Destination: {
        ToAddresses: [this.emailAddress]
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data:
              'This is your scheduled reminder to enter your accomplishments in your report at Rise! <a class="ulink" href="https://time-to-rise.herokuapp.com" target="_blank">Rise Login</a>.'
          },
          Text: {
            Charset: "UTF-8",
            Data:
              "This is your scheduled reminder to enter your accomplishments in your report at Rise!"
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Time to manage your career"
        }
      },
      ReturnPath: "timetorisenotification@gmail.com",
      Source: "timetorisenotification@gmail.com"
    };

    ses.sendEmail(params, (err, data) => {
      if (err) console.log(err, err.stack);
      else console.log(data);
    });
  }

}

export default AWSEmail;

// module.exports = AWSEmail;

// const Email = require('./email')
// const email = new Email('mark.kopec@gmail.com')
// email.sendEmail();