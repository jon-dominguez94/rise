import { connect } from 'react-redux';
import { createEntry } from '../../../actions/entry_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        // userId: state.session.user.userId,
        newEntry: state.entries.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createEntry: data => dispatch(createEntry(data))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewEntry));