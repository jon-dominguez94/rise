import axios from 'axios';

export const writeEntry = data => {
    return axios.post('/api/entries', data)
};

export const getReportEntries = id => {
    return axios.get(`/api/entries/reports/${id}`)
};

