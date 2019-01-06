import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import GoalErrorsReducer from './goal_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  goal: GoalErrorsReducer
});