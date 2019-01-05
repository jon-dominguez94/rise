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

  handleUpdate(){
    
  }


  render(){
    return(
      <div>
        <select 
        value={this.state.dayOfWeek}
        onChange={this.handleUpdate}
        className="day-of-week-selector">
          <option value={0}>Sunday</option>
          <option value={1}>Monday</option>
          <option value={2}>Tuesday</option>
          <option value={3}>Wednesday</option>
          <option value={4}>Thursday</option>
          <option selected value={5}>Friday</option>
          <option value={6}>Saturday</option>
        </select>

        <select className="hour-selector">

        </select>
      </div>
    )
  }
}

export default Reminder;