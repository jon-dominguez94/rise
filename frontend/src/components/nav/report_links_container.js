import { connect } from "react-redux";
import { fetchUserReports, composeReport } from '../../actions/report_actions';
import ReportLinks from "./report_links";

const mstp = state => ({
  user: state.session.user,
  reports: Object.values(state.reports)
});

const mdtp = dispatch => {
  return {
    fetchUserReports: id => dispatch(fetchUserReports(id)),
    composeReport: data => dispatch(composeReport(data))
  };
};

export default connect(
  mstp,
  mdtp
)(ReportLinks);
