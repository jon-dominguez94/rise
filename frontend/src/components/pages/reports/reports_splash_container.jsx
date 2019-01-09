import { connect } from "react-redux";
import ReportsSplashPage from "./reports_splash_page";
// import { fetchReport } from "../../../actions/report_actions";
import { fetchUserEntries } from "../../../actions/entry_actions";

const mstp = (state, ownProps) => {
  const report = state.reports[ownProps.match.params.id];
  return {
    user: state.session.user,
    reports: Object.values(state.reports)
  };
};

const mdtp = dispatch => ({

});

export default connect(
  mstp,
  mdtp
)(ReportsSplashPage);