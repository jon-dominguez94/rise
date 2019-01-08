import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mstp = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mdtp = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mstp, mdtp)(SignupForm);