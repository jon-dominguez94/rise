import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import SplashPage from './main/splash_page';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import '../css/app.css';

const App = () => (
  <div className="overall">
    <div className="left">
      <NavBarContainer />
    </div>
    <div className="right">
      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <ProtectedRoute exact path="/main" component={MainPage} />
        <Redirect to="/main" />
      </Switch>
    </div>
  </div>
);

export default App;