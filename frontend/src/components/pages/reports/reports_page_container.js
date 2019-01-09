import { connect } from "react-redux";
import ReportsPage from "./reports_page";
import { fetchUserEntries } from "../../../actions/entry_actions";
import { fetchUserGoals } from '../../../actions/goal_actions';
import { fetchUserRoles } from '../../../actions/role_actions';
import { fetchUserProjects } from '../../../actions/project_actions';
import { fetchUserReports } from "../../../actions/report_actions";


const mstp = (state, ownProps) => {
  const report = state.reports[ownProps.match.params.id];
  const entries = report ? Object.values(state.entries).filter( entry => entry.report === report._id) : [];
  // debugger
  return {
    user: state.session.user,
    report,
    entries,
    goals: state.goals,
    roles: state.roles,
    projects: state.projects
  };
};

const mdtp = dispatch => ({
  fetchUserReports: id => dispatch(fetchUserReports(id)),
  fetchUserEntries: id => dispatch(fetchUserEntries(id)),
  fetchUserGoals: id => dispatch(fetchUserGoals(id)),
  fetchUserRoles: id => dispatch(fetchUserRoles(id)),
  fetchUserProjects: id => dispatch(fetchUserProjects(id))
});

export default connect(
  mstp,
  mdtp
)(ReportsPage);