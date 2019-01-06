import { RECEIVE_GOALS, RECEIVE_NEW_GOAL } from '../actions/goal_actions';
import merge from 'lodash/merge';

const GoalsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_GOALS:
      return action.goals.data;
    case RECEIVE_NEW_GOAL:
      const goal = action.goal.data;
      const goalObject = { [goal._id]: goal };
      return merge({}, state, goalObject);
    default:
      return state;
  }
};

export default GoalsReducer;