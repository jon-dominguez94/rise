import React from 'react'
import "../../css/reminder.scss";
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Reminder extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dayOfWeek: props.user.dayOfWeek,
      hour: props.user.hour,
      // minute: props.user.minute,
      emailReminder: props.user.emailReminder,
      smsReminder: props.user.smsReminder
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleText = this.toggleText.bind(this);
    this.toggleEmail = this.toggleEmail.bind(this);
  }

  toggleEmail(){
    this.setState({
      emailReminder: !this.state.emailReminder
    })
  }

  toggleText(){
    this.setState({
      smsReminder: !this.state.smsReminder
    })
  }

  handleSubmit(e){
    e.preventDefault()
    let user = this.props.user 
    user.dayOfWeek = this.state.dayOfWeek
    user.hour = this.state.hour
    user.emailReminder = this.state.emailReminder
    user.smsReminder = this.state.smsReminder

    this.props.updateUser(user)
  }

  handleUpdate(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render(){
    return(
      <div className="reminder-container">

        <form  autoComplete="off">
          <FormControl >
            <InputLabel>Day</InputLabel>
            <Select
              value={this.state.dayOfWeek}
              onChange={this.handleUpdate("dayOfWeek")}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
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


       
        <div className="email-text-selector">
          <label>
            Email
            <input onChange={this.toggleEmail} checked={this.state.emailReminder} type="checkbox"/>
          </label>

          <label>
            Text Message
            <input onChange={this.toggleText} checked={this.state.smsReminder} type="checkbox"/>
          </label>
        </div>

        <div className="day-of-week-selector-container">
          <select 
          value={this.state.dayOfWeek}
          onChange={this.handleUpdate("dayOfWeek")}
          className="day-of-week-selector">
            <option value={0}>Sunday</option>
            <option value={1}>Monday</option>
            <option value={2}>Tuesday</option>
            <option value={3}>Wednesday</option>
            <option value={4}>Thursday</option>
            <option value={5}>Friday</option>
            <option value={6}>Saturday</option>
          </select>
        </div>

        <div className="hour-selector-container">
          <select 
          value={this.state.hour}
          onChange={this.handleUpdate("hour")}
          className="hour-selector">
            <option value={0}>1:00 AM</option>
            <option value={1}>2:00 AM</option>
            <option value={2}>3:00 AM</option>
            <option value={3}>4:00 AM</option>
            <option value={4}>5:00 AM</option>
            <option value={5}>6:00 AM</option>
            <option value={6}>7:00 AM</option>
            <option value={7}>8:00 AM</option>
            <option value={8}>9:00 AM</option>
            <option value={9}>10:00 AM</option>
            <option value={10}>11:00 AM</option>
            <option value={11}>12:00 PM</option>
            <option value={12}>1:00 PM</option>
            <option value={13}>2:00 PM</option>
            <option value={14}>3:00 PM</option>
            <option value={15}>4:00 PM</option>
            <option value={16}>5:00 PM</option>
            <option value={17}>6:00 PM</option>
            <option value={18}>7:00 PM</option>
            <option value={19}>8:00 PM</option>
            <option value={20}>9:00 PM</option>
            <option value={21}>10:00 PM</option>
            <option value={22}>11:00 PM</option>
            <option value={23}>12:00 PM</option>
          </select>
        </div>

        <div className="update-preferences-button">
          <button id="update-preferences" onClick={this.handleSubmit}>Update Preferences</button>
        </div>
      </div>
    )
  }
}

export default Reminder;