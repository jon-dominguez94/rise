import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mstp = state => {
  return {
    errors: state.errors.session
  };
};

const mdtp = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mstp, mdtp)(LoginForm);