import { RECEIVE_ROLES, RECEIVE_NEW_ROLE } from '../actions/role_actions';
import merge from 'lodash/merge';

const RolesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROLES:
      return action.roles.data;
    case RECEIVE_NEW_ROLE:
      const role = action.role.data;
      const roleObject = { [role._id]: role };
      return merge({}, state, roleObject);
    default:
      return state;
  }
};

export default RolesReducer;