import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import SplashPage from './main/splash_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import MainPage from './main/main_page';
import ProfilePageContainer from '../components/pages/profile/profile_page_container';
import GoalsPageContainer from '../components/pages/goals/goals_page_container';
import RolesPageContainer from '../components/pages/roles/roles_page_container';
import ProfileSplashPage from './pages/profile/profile_splash_page';
<<<<<<< HEAD
import ReportsSplashPage from '../components/pages/reports/reports_page_container';

=======
import ReminderContainer from '../components/reminder/reminder_container';
>>>>>>> master

import '../css/app.css';

const App = () => (
  <div className="overall">
    <div className="left">
      <Route path='/' component={NavBarContainer} />
    </div>
    <div className="right">
      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <ProtectedRoute exact path="/home" component={MainPage} />
        <ProtectedRoute exact path="/profile" component={ProfileSplashPage} />
        <ProtectedRoute exact path="/profile/account" component={ProfilePageContainer} />
        <ProtectedRoute exact path="/profile/goals" component={GoalsPageContainer} />
        <ProtectedRoute exact path="/profile/roles" component={RolesPageContainer} />
<<<<<<< HEAD
        <ProtectedRoute exact path="/reports" component={ReportsSplashPage} />

=======
        <ProtectedRoute exact path="/reminders" component={ReminderContainer} />
>>>>>>> master
        <Redirect to="/home" />
      </Switch>
    </div>
  </div>
);

export default App;