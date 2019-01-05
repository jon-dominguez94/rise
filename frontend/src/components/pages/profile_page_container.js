import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { updateUser } from '../../actions/session_actions';

const mstp = state => {
  return {
    user: state.session.user,
    errors: state.errors.session
  };
};

const mdtp = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mstp, mdtp)(ProfilePage);