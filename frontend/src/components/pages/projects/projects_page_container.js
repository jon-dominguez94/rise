import { connect } from 'react-redux';
import { fetchUserProjects, updateProject, composeProject } from '../../../actions/project_actions';
import ProjectsPage from './projects_page';
import ProfileElement from "../profile/profile_element";

const mstp = state => {
  return {
    user: state.session.user,
    elements: Object.values(state.projects),
    errors: state.errors.projects,
    label: 'Project'
  };
};

const mdtp = dispatch => {
  return {
    fetchUserElements: id => dispatch(fetchUserProjects(id)),
    updateElement: project => dispatch(updateProject(project)),
    composeElement: data => dispatch(composeProject(data))
  };
};

export default connect(mstp, mdtp)(ProfileElement);