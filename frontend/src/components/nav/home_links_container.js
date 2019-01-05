import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import HomeLinks from "./home_links";

const mstp = state => ({
  user: state.session.user
});

export default connect(
  mstp,
  { logout }
)(HomeLinks);
