import { connect } from "react-redux";
import { fetchUserRoles, updateRole, composeRole } from '../../../actions/role_actions';
import RolesPage from "./roles_page";

const mstp = state => {
  return {
    user: state.session.user,
    roles: Object.values(state.roles),
    errors: state.errors.roles
  };
};

const mdtp = dispatch => {
  return {
    fetchUserRoles: id => dispatch(fetchUserRoles(id)),
    updateRole: role => dispatch(updateRole(role)),
    composeRole: data => dispatch(composeRole(data))
  };
};

export default connect(
  mstp,
  mdtp
)(RolesPage);
