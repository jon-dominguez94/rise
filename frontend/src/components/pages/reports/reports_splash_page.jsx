import React from 'react';
import settingsLogo from '../../../profile.png';
import Pic1 from './pic1.png';
import Pic2 from './pic2.png';
import Pic3 from './pic3.png';
import Pic4 from './pic4.png';
import '../../../css/settings.css';
import { Route } from 'react-router-dom';
import ReportsPage from './reports_page_container';



class ReportsSplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: []
    };
  }

  componentWillMount(){
    this.props.fetchUserReports(this.props.user.id);
  }

  componentWillReceiveProps(newState) {
    // console.log(newState);
    this.setState({
      reports: newState.reports
    });
  }

  render() {
    if (this.state.reports.length == 0) {
      return (
        // <div>
        // <div className="instructions-field">
        //   <div className="instructions">
        //     <h1 className="reports-header">WELCOME TO THE REPORTS PAGE</h1>
        //     <div className="step-1">
        //       <h2>To create a report, click the 'NEW REPORT' button in the sidebar</h2>
        //       <img className="pic1" src={Pic1} alt=""/>
        //     </div>
        //     <div className="step-2">
        //       <h2>Created reports will show up underneath the 'NEW REPORT' button, with the most recent being at the top</h2>
        //       <img className="pic2" src={Pic2} alt=""/>
        //     </div>
        //     <div className="step-3">
        //       <h2>Clicking on a report will show the entries for that report</h2>
        //       <img className="pic3" src={Pic3} alt="" />
        //     </div>
        //   </div>
        // </div>
        // </div>
        <div className="main-page-container">

          <div className="main-page-header">
            <h1>Welcome to the Reports page!</h1>
          </div>

          <div className="reports-instructions-container container">
            <div className="reports-instructions instructions">
              <h2>Create Reports</h2>
              <p>To create a report, click the 'NEW REPORT' button in the sidebar.</p>
            </div>
            <div className="reports-photo photo">
              <img src={Pic1} alt="" />
            </div>
          </div>

          <div className="goals-instructions-container container">
            <div className="goals-photo photo">
              <img src={Pic2} alt="" />
            </div>
            <div className="goals-instructions instructions">
              <h2>Navigate Reports</h2>
              <p>Reports will appear beneath the 'NEW REPORT' button, from newest to oldest.</p>
            </div>
          </div>

          <div className="roles-instructions-container container">
            <div className="roles-instructions instructions">
              <h2>Log Entries</h2>
              <p>Clicking on a report will show the entries for that report.</p>
            </div>
            <div className="roles-photo photo">
              <img src={Pic3} alt="" />
            </div>
          </div>

          <div className="reminders-instructions-container container">
            <div className="reminders-photo photo">
              <img src={Pic4} alt="" />
            </div>
            <div className="reminders-instructions instructions">
              <h2>Create New Entries</h2>
              <p>Click the 'New Entry' button below your last entry to create a new one.</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        // <div></div>
        // <ReportsPage report={Object.values(this.props.reports)[0]} />
        <div>{this.props.history.push(`/reports/${Object.values(this.props.reports)[0]._id}`)}</div>
      )
    }
  }
}

  export default ReportsSplashPage;