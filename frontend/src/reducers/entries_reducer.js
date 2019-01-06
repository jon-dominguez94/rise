import { RECEIVE_REPORT_ENTRIES, RECEIVE_NEW_ENTRY } from '../actions/entry_actions';

const EntriesReducer = (state = { report: {}, new: undefined }, action) => {
    Object.freeze(state);
    letnewState = Object.assign({}, state);

};


export default EntriesReducer;