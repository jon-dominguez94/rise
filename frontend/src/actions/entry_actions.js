import { writeEntry, getUserEntries } from '../util/entry_api_util';

export const RECEIVE_NEW_ENTRY = "RECEIVE_NEW_ENTRY";
export const RECEIVE_ENTRIES = "RECEIVE_REPORT_ENTRIES";

export const receiveEntries = entries => ({
    type: RECEIVE_ENTRIES,
    entries
});

export const receiveNewEntry = entry => ({
    type: RECEIVE_NEW_ENTRY,
    entry
});

export const fetchUserEntries = id => dispatch => (
    getUserEntries(id)
        .then(entries => dispatch(receiveUserEntries(entries)))
        .catch(err => console.log(err))
);

export const createEntry = data => dispatch => (
    writeEntry(data)
        .then(entry => dispatch(receiveNewEntry(entry)))
        .catch(err => console.log(err))
);