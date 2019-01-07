import {RECEIVE_USER_REPORTS, RECEIVE_REPORT, RECEIVE_NEW_REPORT} from '../actions/report_actions';
import merge from 'lodash/merge';

const ReportsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER_REPORTS:
      return action.reports.data;
    case RECEIVE_REPORT:
    case RECEIVE_NEW_REPORT:
    default:
      return state;
  }
};

export default ReportsReducer;