import React from 'react'
import {connect} from 'react-redux'
import Reminder from './reminder';
import {updateUser} from '../../actions/session_actions';

const mapStateToProps = (state) => {

  return{
    user: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {

  return{
    updateUser: user => dispatch(updateUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminder)
