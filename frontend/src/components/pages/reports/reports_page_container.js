import { connect } from "react-redux";
import ReportsPage from "./reports_page";
// import { fetchReport } from "../../../actions/report_actions";
import { fetchUserEntries } from "../../../actions/entry_actions";
import { fetchUserGoals } from '../../../actions/goal_actions';
import { fetchUserRoles } from '../../../actions/role_actions';
import { fetchUserProjects } from '../../../actions/project_actions';

const mstp = (state, ownProps) => {
  const report = state.reports[ownProps.match.params.id];
  return {
    user: state.session.user,
    report,
    entries: Object.values(state.entries),
    goals: Object.values(state.goals),
    roles: Object.values(state.roles),
    projects: Object.values(state.projects)
  };
};

const mdtp = dispatch => ({
  fetchUserEntries: id => dispatch(fetchUserEntries(id)),
  fetchUserGoals: id => dispatch(fetchUserGoals(id)),
  fetchUserRoles: id => dispatch(fetchUserRoles(id)),
  fetchUserProjects: id => dispatch(fetchUserProjects(id))
});

export default connect(
  mstp,
  mdtp
)(ReportsPage);