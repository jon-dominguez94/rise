import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import SplashPage from './main/splash_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import MainPage from './main/main_page';
import ProfilePageContainer from '../components/pages/profile/profile_page_container';
import GoalsPageContainer from './pages/profile/goals_page_container';
import RolesPageContainer from './pages/profile/roles_page_container';
import ProjectsPageContainer from './pages/profile/projects_page_container';
import ProfileSplashPage from './pages/profile/profile_splash_page';
import ReportsSplashPage from '../components/pages/reports/reports_splash_page';
import ReportPage from '../components/pages/reports/reports_page_container';

import ReminderContainer from '../components/reminder/reminder_container';

import NewEntryContainer from '../components/pages/entries/new_entries_container';
// import ReportEntriesContainer from '../components/pages/entries/report_entries';

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
        <ProtectedRoute exact path="/profile/projects" component={ProjectsPageContainer} />
        <ProtectedRoute exact path="/reports" component={ReportsSplashPage} />
        <ProtectedRoute exact path="/reports/:id" component={ReportPage} />

        <ProtectedRoute exact path="/reports/:id/new_entry" component={NewEntryContainer} />

        {/* <ProtectedRoute exact path="/reports/:id" component={ReportEntriesContainer} /> */}

        <ProtectedRoute exact path="/reminders" component={ReminderContainer} />
        <Redirect to="/home" />
      </Switch>
    </div>
  </div>
);

export default App;