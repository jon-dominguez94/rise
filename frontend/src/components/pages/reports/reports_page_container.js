import { connect } from "react-redux";
import ReportsPage from "./reports_page";
import { fetchReport } from "../../../actions/report_actions";

const mstp = (state, ownProps) => {
  const report = state.reports[ownProps.match.params.id];
  return {
    user: state.session.user,
    report
  };
};

const mdtp = dispatch => ({
  fetchReport: id => dispatch(fetchReport(id))
});

export default connect(
  mstp,
  mdtp
)(ReportsPage);