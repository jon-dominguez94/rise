import { getUserProjects, writeProject, updateUserProject } from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_NEW_PROJECT = "RECEIVE_NEW_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveNewProject = project => ({
  type: RECEIVE_NEW_PROJECT,
  project
});

export const receiveErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const fetchUserProjects = id => dispatch => (
  getUserProjects(id)
    .then(
      projects => dispatch(receiveProjects(projects)),
      err => dispatch(receiveErrors(err.response.data))
    )
);

export const composeProject = data => dispatch => (
  writeProject(data)
    .then(
      project => dispatch(receiveNewProject(project)),
      err => dispatch(receiveErrors(err.response.data))
    )
);

export const updateProject = data => dispatch => (
  updateUserProject(data)
    .then(
      project => dispatch(receiveNewProject(project)),
      err => dispatch(receiveErrors(err.response.data))
    )
);