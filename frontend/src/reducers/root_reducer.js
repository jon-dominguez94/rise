import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import reports from './reports_reducer';

import goals from './goals_reducer';
import entries from './entries_reducer';

const RootReducer = combineReducers({
  goals,
  session,
  errors,
  reports,
  entries
});

export default RootReducer;