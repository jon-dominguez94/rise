import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import GoalErrorsReducer from './goal_errors_reducer';
import RoleErrorsReducer from './role_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  goals: GoalErrorsReducer,
  roles: RoleErrorsReducer
});