import { connect } from 'react-redux';
import { fetchUserGoals, updateGoal, composeGoal } from '../../../actions/goal_actions';
import ProfileElement from './profile_element';

const mstp = state => {
  return {
    user: state.session.user,
    elements: Object.values(state.goals),
    errors: state.errors.goals,
    label: 'Goal'
  };
};

const mdtp = dispatch => {
  return {
    fetchUserElements: id => dispatch(fetchUserGoals(id)),
    updateElement: goal => dispatch(updateGoal(goal)),
    composeElement: data => dispatch(composeGoal(data))
  };
};

export default connect(mstp, mdtp)(ProfileElement);