import React from 'react'

class Reminder extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dayOfWeek: '',
      hour: '',
      minute: '',
      emailReminder: '',
      smsReminder: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){

  }

  handleUpdate(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render(){
    return(
      <div className="reminder-container">
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
            <option selected value={5}>Friday</option>
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
            <option selected value={9}>10:00 AM</option>
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