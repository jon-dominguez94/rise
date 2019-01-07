import axios from 'axios';

export const getUserProjects = id => {
  return axios({
    method: 'get',
    url: `/api/projects/user/${id}`
  });
};

export const writeProject = data => {
  return axios({
    method: 'post',
    url: '/api/projects/',
    data
  });
};

export const updateUserProject = project => {
  return axios({
    method: 'patch',
    url: `/api/projects/${project._id}`,
    data: project
  });
};