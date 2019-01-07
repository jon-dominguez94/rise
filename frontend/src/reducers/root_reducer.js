import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import goals from './goals_reducer';
import roles from './roles_reducer';
import projects from './projects_reducer';
import entries from './entries_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  goals,
  roles,
  projects,
  entries
});

export default RootReducer;