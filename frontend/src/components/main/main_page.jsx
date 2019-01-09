import React from "react";
import '../../css/main_page.css';
import GoalPhoto from '../../goals_instructions.jpg';
import ReportPhoto from '../../reports_instructions.jpg'
import ProjectPhoto from '../../project_instruction2.jpg'
import RolePhoto from '../../roles_instructions.jpg'
import ReminderPhoto from '../../reminders_instructions.jpg'

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
          <div className="reports-instructions instructions">
            <h2>Reports</h2>
            <p>Create entries for your weekly and monthly Achievements!</p>
          </div>
        </div>

        <div className="goals-instructions-container container">
          <div className="goals-instructions instructions">
            <h2>Goals</h2>
            <p>Record your goals for the year.</p>
          </div>
          <div className="goals-photo photo">
            <img src={GoalPhoto} alt=""/>
          </div>
        </div>

        <div className="roles-instructions-container container">
          <div className="roles-photo photo">
            <img src={RolePhoto} alt=""/>
          </div>
          <div className="roles-instructions instructions">
            <h2>Roles</h2>
            <p>Track your varying roles throughout the year.</p>
          </div>
        </div>

        <div className="projects-instructions-container container">
          <div className="projects-instructions instructions">
            <h2>Projects</h2>
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
          <div className="reminders-instructions instructions">
            <h2>Reminders</h2>
            <p>We know life is hectic. Let us take care of the weekly reminders so you can stay focused.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default MainPage;
