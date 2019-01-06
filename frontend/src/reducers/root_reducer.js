import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import goals from './goals_reducer';

const RootReducer = combineReducers({
  goals,
  session,
  errors
});

export default RootReducer;