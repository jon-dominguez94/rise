import React from "react";
import '../../css/main_page.css';
import GoalPhoto from '../../goals_instructions.jpg';
import ReportPhoto from '../../reports_instructions.jpg'
import ProjectPhoto from '../../project_instruction2.jpg'
import RolePhoto from '../../roles_instructions.jpg'
import ReminderPhoto from '../../reminders_instructions.jpg'
import Footer from './footer';
import { NavLink } from 'react-router-dom';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-container">

        <div className="main-page-header">
          <h1>Keep Your Career on Track</h1>
        </div>

        <div className="reports-instructions-container container">
          <div className="reports-photo photo">
            <img src={ReportPhoto} alt=""/>
          </div>
          <div className="reports-instructions instructions" id="odd1">
            <NavLink to={"/reports"}><h2>Reports</h2></NavLink>
            <p>Create entries for your weekly and monthly Achievements!</p>
          </div>
        </div>

        <div className="goals-instructions-container container">
          <div className="goals-instructions instructions" id="even1">
            <NavLink to={"profile/goals"}><h2>Goals</h2></NavLink>
            <p>Your goals matter to you. Record them so you can track your progress!</p>
          </div>
          <div className="goals-photo photo">
            <img src={GoalPhoto} alt=""/>
          </div>
        </div>

        <div className="roles-instructions-container container">
          <div className="roles-photo photo">
            <img src={RolePhoto} alt=""/>
          </div>
          <div className="roles-instructions instructions" id="odd2">
            <NavLink to={"profile/roles"}><h2>Roles</h2></NavLink>
            <p>Track your varying roles throughout the year.</p>
          </div>
        </div>

        <div className="projects-instructions-container container">
          <div className="projects-instructions instructions" id="even2">
            <NavLink to={"profile/projects"}><h2>Projects</h2></NavLink>
            <p>Keep a record of all the projects you have completed or worked on.</p>
          </div>
          <div className="projects-photo photo">
              <img src={ProjectPhoto} alt=""/>
          </div>
        </div>

        <div className="reminders-instructions-container container">
          <div className="reminders-photo photo">
            <img src={ReminderPhoto} alt=""/>
          </div>
          <div className="reminders-instructions instructions" id="odd3">
            <NavLink to={"/reminders"}><h2>Reminders</h2></NavLink>
            <p>We know life is hectic. Let us take care of the weekly reminders so you can stay focused!</p>
          </div>
        </div>
        <div className="space-break">

        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainPage;
