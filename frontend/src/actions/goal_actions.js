import { getUserGoals, writeGoal, updateUserGoal } from '../util/goal_api_util';

export const RECEIVE_GOALS = "RECEIVE_GOALS";
export const RECEIVE_NEW_GOAL = "RECEIVE_NEW_GOAL";

export const receiveGoals = goals => ({
  type: RECEIVE_GOALS,
  goals
});

export const receiveNewGoal = goal => ({
  type: RECEIVE_NEW_GOAL,
  goal
});

export const fetchUserGoals = id => dispatch => (
  getUserGoals(id)
  .then(goals => dispatch(receiveGoals(goals)))
  .catch(err => console.log(err))
);

export const composeGoal = data => dispatch => (
  writeGoal(data)
  .then(goal => dispatch(receiveNewGoal(goal)))
  .catch(err => console.log(err))
);

export const updateGoal = data => dispatch => (
  updateUserGoal(data)
  .then(goal => dispatch(receiveNewGoal(goal)))
  .catch(err => console.log(err))
);