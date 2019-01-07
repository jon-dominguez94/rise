import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import reports from './reports_reducer';


const RootReducer = combineReducers({
  session,
  errors,
  reports
});

export default RootReducer;