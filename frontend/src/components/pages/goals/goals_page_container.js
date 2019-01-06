import { connect } from 'react-redux';
import { fetchUserGoals, updateGoal, composeGoal } from '../../../actions/goal_actions';
import GoalsPage from './goals_page';

const mstp = state => {
  return {
    user: state.session.user,
    goals: Object.values(state.goals)
  };
};

const mdtp = dispatch => {
  return {
    fetchUserGoals: id => dispatch(fetchUserGoals(id)),
    updateGoal: goal => dispatch(updateGoal(goal)),
    composeGoal: data => dispatch(composeGoal(data))
  };
};

export default connect(mstp, mdtp)(GoalsPage);