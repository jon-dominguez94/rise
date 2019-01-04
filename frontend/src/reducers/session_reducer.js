import { 
  RECEIVE_CURRENT_USER,
  RECEIVE_UPDATED_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_UPDATED_USER:
      const newUserInfo = {
        fname: action.currentUser.fname,
        lname: action.currentUser.lname,
        phone: action.currentUser.phone,
      }
      const newInfo = Object.assign({}, state.session.user, newUserInfo);
      return {
        ...state, 
        user: newInfo
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      }
    default:
      return state;
  }
}