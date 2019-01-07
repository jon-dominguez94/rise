import { connect } from 'react-redux';
import { fetchUserProjects, updateProject, composeProject } from '../../../actions/project_actions';
import ProjectsPage from './projects_page';

const mstp = state => {
  return {
    user: state.session.user,
    projects: Object.values(state.projects),
    errors: state.errors.projects
  };
};

const mdtp = dispatch => {
  return {
    fetchUserProjects: id => dispatch(fetchUserProjects(id)),
    updateProject: project => dispatch(updateProject(project)),
    composeProject: data => dispatch(composeProject(data))
  };
};

export default connect(mstp, mdtp)(ProjectsPage);