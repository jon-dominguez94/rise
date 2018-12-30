import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mstp = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mdtp = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(mstp, mdtp)(SignupForm);