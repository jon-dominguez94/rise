import { getUserReports, getReport, createReport } from '../util/report_api_util';

export const RECEIVE_USER_REPORTS = "RECEIVE_USER_REPORTS";
export const RECEIVE_REPORT = "RECEIVE_REPORT";
export const RECEIVE_NEW_REPORT = "RECEIVE_NEW_REPORT";


export const receiveUserReports = reports => ({
  type: RECEIVE_USER_REPORTS,
  reports
});

export const receiveReport = report => ({
  type: RECEIVE_REPORT,
  report
});

export const receiveNewReport = report => ({
  type: RECEIVE_NEW_REPORT,
  report
});

export const fetchReport = (id) => dispatch => (
  getReport(id)
    .then(report => dispatch(receiveReport(report)))
    .catch(err => console.log(err))
);

export const fetchUserReports = id => dispatch => (
  getUserReports(id)
    .then(reports => dispatch(receiveUserReports(reports)))
    .catch(err => console.log(err))
);

export const composeReport = data => dispatch => (
  createReport(data)
    .then(report => dispatch(receiveNewReport(report)))
    .catch(err => console.log(err))
);