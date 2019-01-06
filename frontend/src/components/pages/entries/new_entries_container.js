import { connect } from 'react-redux';
import { createEntry } from '../../../actions/entry_actions';


const mapStateToProps = (state) => {
    return {
        // userId: state.session.user.userId,
        newEntry: state.entries.new
    };
};
