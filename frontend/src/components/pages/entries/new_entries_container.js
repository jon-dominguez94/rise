import { connect } from 'react-redux';
import NewEntry from './new_entry';
import { createEntry } from '../../../actions/entry_actions';
import { fetchUserGoals } from '../../../actions/goal_actions';
import { fetchUserRoles } from '../../../actions/role_actions';
import { fetchUserProjects } from '../../../actions/project_actions';
import { fetchUserReports } from '../../../actions/report_actions';


const mapStateToProps = (state, ownProps) => {
    let reportId = ownProps.match.params.id;
    return {
        user: state.session.user,
        report: state.reports[reportId],
        goals: Object.values(state.goals),
        roles: Object.values(state.roles),
        projects: Object.values(state.projects)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createEntry: data => dispatch(createEntry(data)),
        fetchUserGoals: id => dispatch(fetchUserGoals(id)),
        fetchUserProjects: id => dispatch(fetchUserProjects(id)),
        fetchUserRoles: id => dispatch(fetchUserRoles(id)),
        fetchUserReports: id => dispatch(fetchUserReports(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry);