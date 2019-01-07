import { writeEntry, getReportEntries } from '../util/entry_api_util';

export const RECEIVE_NEW_ENTRY = "RECEIVE_NEW_ENTRY";
export const RECEIVE_REPORT_ENTRIES = "RECEIVE_REPORT_ENTRIES";

export const receiveReportEntries = entries => ({
    type: RECEIVE_REPORT_ENTRIES,
    entries
});

export const receiveNewEntry = entry => ({
    type: RECEIVE_NEW_ENTRY,
    entry
});

export const fetchReportEntries = id => dispatch => (
    getReportEntries(id)
        .then(entries => dispatch(receiveReportEntries(entries)))
        .catch(err => console.log(err))
);

export const createEntry = data => dispatch => (
    writeEntry(data)
        .then(entry => dispatch(receiveNewEntry(entry)))
        .catch(err => console.log(err))
);