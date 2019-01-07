import { RECEIVE_PROJECTS, RECEIVE_NEW_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects.data;
    case RECEIVE_NEW_PROJECT:
      const project = action.project.data;
      const projectObject = { [project._id]: project };
      return merge({}, state, projectObject);
    default:
      return state;
  }
};

export default ProjectsReducer;