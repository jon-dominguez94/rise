import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import entries from './entries_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  entries
});

export default RootReducer;