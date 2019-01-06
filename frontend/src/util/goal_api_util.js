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

export const updateGoal = goal => {
  return axios({
    method: 'patch',
    url: `/api/goals/${goal.id}`,
    data: { goal } 
  });
};