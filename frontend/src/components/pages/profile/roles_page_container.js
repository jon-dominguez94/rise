import { connect } from "react-redux";
import { fetchUserRoles, updateRole, composeRole } from '../../../actions/role_actions';
import ProfileElement from "./profile_element";

const mstp = state => {
  return {
    user: state.session.user,
    elements: Object.values(state.roles),
    errors: state.errors.roles,
    label: 'Role',
    bg: '#084627'
  };
};

const mdtp = dispatch => {
  return {
    fetchUserElements: id => dispatch(fetchUserRoles(id)),
    updateElement: role => dispatch(updateRole(role)),
    composeElement: data => dispatch(composeRole(data))
  };
};

export default connect(
  mstp,
  mdtp
)(ProfileElement);
