import React from 'react'
import {connect} from 'react-redux'
import Reminder from './reminder';

const mapStateToProps = (state) => {
  const reminder = this.state.reminder
  return{
    reminder
  }
}

const mapDispatchToProps = (dispatch) => {

  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminder)
