import axios from 'axios';

export const getUserGoals = id => {
  return axios({
    method: 'get',
    url: `/api/goals/user/${id}`
  });
};

export const writeGoal = data => {
  return axios({
    method: 'post',
    url: '/api/goals/',
    data
  });
};

export const updateUserGoal = goal => {
  return axios({
    method: 'patch',
    url: `/api/goals/${goal._id}`,
    data: goal 
  });
};