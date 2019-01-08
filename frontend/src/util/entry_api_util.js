import axios from 'axios';

export const writeEntry = data => {
    return axios.post('/api/entries', data)
};

export const getUserEntries = id => {
    return axios.get(`/api/entries/user/${id}`)
};

