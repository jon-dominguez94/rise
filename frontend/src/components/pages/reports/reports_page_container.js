import { connect } from "react-redux";
import ReportsPage from "./reports_page";
import { fetchUserEntries } from "../../../actions/entry_actions";
import { fetchUserGoals } from '../../../actions/goal_actions';
import { fetchUserRoles } from '../../../actions/role_actions';
import { fetchUserProjects } from '../../../actions/project_actions';

const mstp = (state, ownProps) => {
  const report = state.reports[ownProps.match.params.id];
  const entries = Object.values(state.entries).filter( entry => entry.report === report._id)
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
  fetchUserEntries: id => dispatch(fetchUserEntries(id)),
  fetchUserGoals: id => dispatch(fetchUserGoals(id)),
  fetchUserRoles: id => dispatch(fetchUserRoles(id)),
  fetchUserProjects: id => dispatch(fetchUserProjects(id))
});

export default connect(
  mstp,
  mdtp
)(ReportsPage);