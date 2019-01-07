import {
  RECEIVE_PROJECT_ERRORS,
  RECEIVE_PROJECTS,
  RECEIVE_NEW_PROJECT
} from '../actions/project_actions';

const _nullErrors = [];

const ProjectErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case RECEIVE_PROJECTS:
      return _nullErrors;
    case RECEIVE_NEW_PROJECT:
      return _nullErrors;
    default:
      return state;
  }
};

export default ProjectErrorsReducer;