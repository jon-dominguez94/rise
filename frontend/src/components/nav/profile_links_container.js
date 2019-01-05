import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import ProfileLinks from "./profile_links";

const mstp = state => ({
  user: state.session.user
});

export default connect(
  mstp,
  { logout }
)(ProfileLinks);
