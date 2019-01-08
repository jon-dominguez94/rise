import axios from 'axios';

export const writeEntry = data => {
    return axios.post('/api/entries', data)
};

export const getUserEntries = id => {
    return axios({
        method: 'get',
        url: `/api/entries/user/${id}`
    });
};

