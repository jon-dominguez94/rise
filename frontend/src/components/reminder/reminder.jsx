import React from 'react'
import "../../css/reminder.scss";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles, withTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
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

    this.props.updateUser(user);
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
      <div className="reminder-container">
        <div className="email-selector">
          <FormControlLabel control={<Switch checked={this.state.emailReminder} onChange={this.handleChange("emailReminder")} value="emailReminder" color="primary" />} label="Email" />
        </div>
        <div className="sms-selector">
          <FormControlLabel control={<Switch checked={this.state.smsReminder} onChange={this.handleChange("smsReminder")} value="smsReminder" color="primary" />} label="Text Message" />
        </div>

        <form autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={ref => {
                this.InputLabelRef = ref;
              }} htmlFor="outlined-age-simple">
              Day
            </InputLabel>
            <Select className="drop" value={this.state.dayOfWeek} onChange={this.handleDropFormChange} input={<OutlinedInput labelWidth={this.state.labelWidth} name="dayOfWeek" id="outlined-age-simple" />}>
    
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

        <form autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={ref => {
                this.InputLabelRef = ref;
              }} htmlFor="outlined-age-simple">
              Hour
            </InputLabel>
            <Select className="drop" value={this.state.hour} onChange={this.handleDropFormChange} input={<OutlinedInput labelWidth={this.state.labelWidth} name="dayOfWeek" id="outlined-age-simple" />}>

              <MenuItem value={0}>1:00 AM</MenuItem>
              <MenuItem value={1}>2:00 AM</MenuItem>
              <MenuItem value={2}>3:00 AM</MenuItem>
              <MenuItem value={3}>4:00 AM</MenuItem>
              <MenuItem value={4}>5:00 AM</MenuItem>
              <MenuItem value={5}>6:00 AM</MenuItem>
              <MenuItem value={6}>7:00 AM</MenuItem>
              <MenuItem value={7}>8:00 AM</MenuItem>
              <MenuItem value={8}>9:00 AM</MenuItem>
              <MenuItem value={9}>10:00 AM</MenuItem>
              <MenuItem value={10}>11:00 AM</MenuItem>
              <MenuItem value={11}>12:00 PM</MenuItem>
              <MenuItem value={12}>1:00 PM</MenuItem>
              <MenuItem value={13}>2:00 PM</MenuItem>
              <MenuItem value={14}>3:00 PM</MenuItem>
              <MenuItem value={15}>4:00 PM</MenuItem>
              <MenuItem value={16}>5:00 PM</MenuItem>
              <MenuItem value={17}>6:00 PM</MenuItem>
              <MenuItem value={18}>7:00 PM</MenuItem>
              <MenuItem value={19}>8:00 PM</MenuItem>
              <MenuItem value={20}>9:00 PM</MenuItem>
              <MenuItem value={21}>10:00 PM</MenuItem>
              <MenuItem value={22}>11:00 PM</MenuItem>
              <MenuItem value={23}>12:00 PM</MenuItem>
            </Select>
          </FormControl>
        </form>

        <div className="update-preferences-button">
          <Button variant="contained" onClick={this.handleSubmit} color="primary" className={classes.button}>
            Save Preferences
          </Button>
        </div>
      </div>
    );
  }
}

Reminder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reminder);