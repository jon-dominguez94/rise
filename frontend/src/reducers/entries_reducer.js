import { RECEIVE_ENTRIES, RECEIVE_NEW_ENTRY } from '../actions/entry_actions';
import merge from 'lodash/merge';

const EntriesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_NEW_ENTRY:
            const entry = action.entry.data;
            const entryObject = { [entry._id]: entry };
            return merge({}, state, entryObject);
        case RECEIVE_ENTRIES:
            return action.entries.data;
        default: 
            return state;
    }
};


export default EntriesReducer;