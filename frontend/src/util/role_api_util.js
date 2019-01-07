import axios from 'axios';

export const getUserRoles = id => {
  return axios({
    method: 'get',
    url: `/api/roles/user/${id}`
  });
};

export const writeRole = data => {
  return axios({
    method: 'post',
    url: '/api/roles/',
    data
  });
};

export const updateUserRole = role => {
  return axios({
    method: 'patch',
    url: `/api/roles/${role._id}`,
    data: role
  });
};