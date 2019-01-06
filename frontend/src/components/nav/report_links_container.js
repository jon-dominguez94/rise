import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import ReportLinks from "./report_links";

const mstp = state => ({
  user: state.session.user
});

export default connect(
  mstp,
  { logout }
)(ReportLinks);
