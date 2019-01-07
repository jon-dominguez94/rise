import { RECEIVE_REPORT_ENTRIES, RECEIVE_NEW_ENTRY } from '../actions/entry_actions';
import merge from 'lodash/merge';

const EntriesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_NEW_ENTRY:
            newState.new = action.entry.data;
            return newState;
        case RECEIVE_REPORT_ENTRIES:
            newState.report = action.entries.data;
            return newState;
        default: 
            return state;
    }
};


export default EntriesReducer;