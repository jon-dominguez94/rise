import { connect } from 'react-redux';
import Navpath from './navpath';

const mstp = (state, ownProps) => {
  // console.log(ownProps);
  return {
    path: ownProps.location.pathname
  };
};

const mdtp = dispatch => {
  return {

  };
};

export default connect(mstp, mdtp)(Navpath);