import React from 'react'
import "../../css/reminder.css";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
// import keys from '../../special';
import { withStyles, withTheme} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Email from '../../util/email/email';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const keys = require('../../config/keys');

var AWS = require('aws-sdk');

var schedule = require('node-schedule');
// const Email = require('../../util/email/email')

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  
});

class Reminder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dayOfWeek: props.user.dayOfWeek,
      hour: props.user.hour,
      // minute: props.user.minute,
      emailReminder: props.user.emailReminder,
      smsReminder: props.user.smsReminder,
      age: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleText = this.toggleText.bind(this);
    this.toggleEmail = this.toggleEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTest = this.handleTest.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  };

  handleDropFormChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleEmail() {
    this.setState({
      emailReminder: !this.state.emailReminder
    });
  }

  toggleText() {
    this.setState({
      smsReminder: !this.state.smsReminder
    });
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    let user = this.props.user;
    user.dayOfWeek = this.state.dayOfWeek;
    user.hour = this.state.hour;
    user.emailReminder = this.state.emailReminder;
    user.smsReminder = this.state.smsReminder;

    let oldPhone = this.props.user.phone
    let newNumber = "+1" + oldPhone.slice(0,3) + oldPhone.slice(4,7) + oldPhone.slice(8,12)

    var params = {
      Message: 'Time to update your achievements on Rise!',
      MessageStructure: 'string',
      PhoneNumber: newNumber
    };


    var rule = new schedule.RecurrenceRule();
    rule.minute = 0
    rule.dayOfWeek = this.state.dayOfWeek
    rule.hour = this.state.hour

    if (this.state.smsReminder){
      console.log('text scheduled')
      var j = schedule.scheduleJob(rule, function(){

        AWS.config.update({
          accessKeyId: keys.AWS_ACCESS_KEY_ID,
          secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
          region: keys.AWS_REGION
        });
        var sns = new AWS.SNS();
        console.log('begin text')
        sns.publish(params, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     console.log(data);           // successful response
        })
      
        console.log('complete')
      });
    }

    if( this.state.emailReminder){
      // const Email = require('../../util/email/email')
      const email = new Email(this.props.user.email)
      console.log('begin email message')
      var k = schedule.scheduleJob(rule, email.sendEmail())
      
      // email.sendEmail();
    }

    this.props.updateUser(user);
  }

  handleTest(e) {
    e.preventDefault()
    if (this.state.emailReminder) {
      const email = new Email(this.props.user.email)
      console.log('begin email message')
      
      email.sendEmail();
    }

    if (this.state.smsReminder) {
      let oldPhone = this.props.user.phone
      let newNumber = "+1" + oldPhone.slice(0, 3) + oldPhone.slice(4, 7) + oldPhone.slice(8, 12)

      var params = {
        Message: 'Time to update your achievements on Rise!',
        MessageStructure: 'string',
        PhoneNumber: newNumber
      };

      AWS.config.update({
        accessKeyId: keys.AWS_ACCESS_KEY_ID,
        secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
        region: keys.AWS_REGION
      });
      AWS.config.update({ region: 'us-west-2' });
      var sns = new AWS.SNS();

      sns.publish(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
      })
    }
  }

  handleUpdate(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {

    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
    
      <div className="reminder-container">
        Update Your Reminder Settings Here
        
        <div className="email-selector">
          <FormControlLabel 
            control={
              <Switch 
                checked={this.state.emailReminder} 
                onChange={this.handleChange("emailReminder")} 
                value="emailReminder" 
                color="primary" 
                />} 
            label="Email" />
        </div>

        <div className="sms-selector">
          <FormControlLabel 
            control={
              <Switch 
                checked={this.state.smsReminder} 
                onChange={this.handleChange("smsReminder")} 
                value="smsReminder" 
                color="primary" 
              />} 
            label="Text Message" />
        </div>
        <div className="drop-selectors">
          <div className="day-selector">
            <form autoComplete="off">
              <FormControl 
                variant="outlined" 
                className={classes.formControl}>
                <InputLabel ref={ref => {
                    this.InputLabelRef = ref;
                  }} htmlFor="outlined-age-simple">
                  Day
                </InputLabel>

                <Select 
                  selected classes={{
                    root: 'text-color'
                  }}
                  className="drop" 
                  value={this.state.dayOfWeek} 
                  onChange={this.handleDropFormChange} 
                  input={<OutlinedInput 
                  labelWidth={this.state.labelWidth} 
                  name="dayOfWeek" id="outlined-age-simple" />}>
        
                  <MenuItem value={0}>Sunday</MenuItem>
                  <MenuItem value={1}>Monday</MenuItem>
                  <MenuItem value={2}>Tuesday</MenuItem>
                  <MenuItem value={3}>Wednesday</MenuItem>
                  <MenuItem value={4}>Thursday</MenuItem>
                  <MenuItem value={5}>Friday</MenuItem>
                  <MenuItem value={6}>Saturday</MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>

          <div className="time-selector">
            <form autoComplete="off">
              <FormControl
                variant="outlined"
                className={classes.formControl}>
                <InputLabel 
                  ref={ref => {
                  this.InputLabelRef = ref;
                }} htmlFor="outlined-age-simple">
                  Time
                </InputLabel>

                <Select
                  selected classes={{
                    root: 'text-color'}}
                  value={this.state.hour}
                  className={classes.select}
                  onChange={this.handleDropFormChange}
                  input={<OutlinedInput
                    labelWidth={this.state.labelWidth}
                    name="hour" id="outlined-age-simple" />}
                  labelStyle={{ color: '#ff0000' }}
                >

                  <MenuItem value={1}>1:00 AM</MenuItem>
                  <MenuItem value={2}>2:00 AM</MenuItem>
                  <MenuItem value={3}>3:00 AM</MenuItem>
                  <MenuItem value={4}>4:00 AM</MenuItem>
                  <MenuItem value={5}>5:00 AM</MenuItem>
                  <MenuItem value={6}>6:00 AM</MenuItem>
                  <MenuItem value={7}>7:00 AM</MenuItem>
                  <MenuItem value={8}>8:00 AM</MenuItem>
                  <MenuItem value={9}>9:00 AM</MenuItem>
                  <MenuItem value={10}>10:00 AM</MenuItem>
                  <MenuItem value={11}>11:00 AM</MenuItem>
                  <MenuItem value={12}>12:00 PM</MenuItem>
                  <MenuItem value={13}>1:00 PM</MenuItem>
                  <MenuItem value={14}>2:00 PM</MenuItem>
                  <MenuItem value={15}>3:00 PM</MenuItem>
                  <MenuItem value={16}>4:00 PM</MenuItem>
                  <MenuItem value={17}>5:00 PM</MenuItem>
                  <MenuItem value={18}>6:00 PM</MenuItem>
                  <MenuItem value={19}>7:00 PM</MenuItem>
                  <MenuItem value={20}>8:00 PM</MenuItem>
                  <MenuItem value={21}>9:00 PM</MenuItem>
                  <MenuItem value={22}>10:00 PM</MenuItem>
                  <MenuItem value={23}>11:00 PM</MenuItem>
                  <MenuItem value={0}>12:00 AM</MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>
        </div>

        <div className="save-preferences-button">
          <Button 
            variant="contained" 
            onClick={this.handleSubmit} 
            color="primary" 
            className={classes.button}
          >
            Save Settings
          </Button>
        </div>

        <div className="test-preferences-button">
          <Button
            variant="contained"
            onClick={this.handleTest}
            color="primary"
            className={classes.button}
          >
            Test
        </Button>
        </div>

          <div className="test-info">
            Test will immediatly send a notification using the methods toggled above. Navigate to "Account Info" to change your text message number.
          </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

Reminder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reminder);