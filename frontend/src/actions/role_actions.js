import { getUserRoles, writeRole, updateUserRole } from '../util/role_api_util';

export const RECEIVE_ROLES = "RECEIVE_ROLES";
export const RECEIVE_NEW_ROLE = "RECEIVE_NEW_ROLE";
export const RECEIVE_ROLE_ERRORS = "RECEIVE_ROLE_ERRORS";

export const receiveRoles = roles => ({
  type: RECEIVE_ROLES,
  roles
});

export const receiveNewRole = role => ({
  type: RECEIVE_NEW_ROLE,
  role
});

export const receiveErrors = errors => ({
  type: RECEIVE_ROLE_ERRORS,
  errors
});

export const fetchUserRoles = id => dispatch => (
  getUserRoles(id)
    .then(
      roles => dispatch(receiveRoles(roles)),
      err => dispatch(receiveErrors(err.response.data))
    )
);

export const composeRole = data => dispatch => (
  writeRole(data)
    .then(
      role => dispatch(receiveNewRole(role)),
      err => dispatch(receiveErrors(err.response.data))
    )
);

export const updateRole = data => dispatch => (
  updateUserRole(data)
    .then(
      role => dispatch(receiveNewRole(role)),
      err => dispatch(receiveErrors(err.response.data))
    )
);