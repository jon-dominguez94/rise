import { connect } from 'react-redux';
import ProfilePage from './profile_page';

const mstp = state => {
  return {
    user: state.session.user
  };
};

const mdtp = dispatch => {
  return {

  };
};

export default connect(mstp, mdtp)(ProfilePage);