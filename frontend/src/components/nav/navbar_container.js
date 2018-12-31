import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Navbar from './navbar';

const mstp = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

export default connect(mstp, { logout })(Navbar);