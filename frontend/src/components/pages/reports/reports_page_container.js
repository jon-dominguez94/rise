import { connect } from "react-redux";
import ReportsPage from "./reports_page";
import { fetchReport } from "../../../actions/report_actions";
import { fetchUserEntries } from "../../../actions/entry_actions";

const mstp = (state, ownProps) => {
  // debugger
  const report = state.reports[ownProps.match.params.id];
  // debugger
  return {
    user: state.session.user,
    report,
    entries: Object.values(state.entries)
  };
};

const mdtp = dispatch => ({
  fetchReport: id => dispatch(fetchReport(id)),
  fetchUserEntries: id => dispatch(fetchUserEntries(id))
});

export default connect(
  mstp,
  mdtp
)(ReportsPage);