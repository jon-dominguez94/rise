import { getUserGoals, writeGoal, updateGoal } from '../util/goal_api_util';

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