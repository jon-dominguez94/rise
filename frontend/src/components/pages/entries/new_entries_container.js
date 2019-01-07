import { connect } from 'react-redux';
import { createEntry } from '../../../actions/entry_actions';
import { fetchUserGoals } from '../../../actions/goal_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
    let reportId = ownProps.match.params.id;

    return {
        user: state.session.user,
        report: state.entities.reports[reportId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createEntry: data => dispatch(createEntry(data)),
        fetchUserGoals: id => dispatch(fetchUserGoals(id))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewEntry));