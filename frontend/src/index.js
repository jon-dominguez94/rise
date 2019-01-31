import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout, updateUser } from './actions/session_actions';
import { fetchUserGoals, updateGoal } from './actions/goal_actions';
import './css/reset.css'; 
import axios from 'axios';
import * as GoalAPI from '../src/util/goal_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.axios = axios;
  window.GoalAPI = GoalAPI;
  let store;

  if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodedUser
      }
    };
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;
    if(decodedUser.exp < currentTime){
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    store = configureStore({});
  }

  // REMOVE FOR PRODUCTION!!
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.updateUser = updateUser;
  window.fetchUserGoals = fetchUserGoals;
  window.updateGoal = updateGoal;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
