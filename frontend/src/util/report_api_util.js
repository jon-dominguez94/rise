import axios from 'axios';

export const getUserReports = id => {
  return axios.get(`/api/reports/user/${id}`)
};

export const getReport = id => {
  return axios.get(`/api/reports/${id}`)
};

export const createReport = data => {
  return axios.post('/api/reports/', data)
};
