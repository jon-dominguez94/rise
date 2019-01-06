import { RECEIVE_GOALS, RECEIVE_NEW_GOAL } from '../actions/goal_actions';

const GoalsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_GOALS:

    case RECEIVE_NEW_GOAL:

    default:
      return state;
  }
};

export default GoalsReducer;