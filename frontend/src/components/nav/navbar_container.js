import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Navbar from './navbar';

const mstp = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(mstp, { logout })(Navbar);