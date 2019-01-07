import {
  RECEIVE_ROLE_ERRORS,
  RECEIVE_ROLES,
  RECEIVE_NEW_ROLE
} from '../actions/role_actions';

const _nullErrors = [];

const RoleErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROLE_ERRORS:
      return action.errors;
    case RECEIVE_ROLES:
      return _nullErrors;
    case RECEIVE_NEW_ROLE:
      return _nullErrors;
    default:
      return state;
  }
};

export default RoleErrorsReducer;