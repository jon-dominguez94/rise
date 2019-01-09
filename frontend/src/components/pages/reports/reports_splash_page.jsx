import React from 'react';
import settingsLogo from '../../../profile.png';
import Pic1 from './pic1.png';
import Pic2 from './pic2.png';
import Pic3 from './pic3.png';
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
        <div>
        {/* <div className="reports-logo-container">
          <img className="settings-logo" src={settingsLogo} alt="" />
        </div> */}
        <div className="instructions-field">
          <div className="instructions">
            <h1 className="reports-header">WELCOME TO THE REPORTS PAGE</h1>
            <div className="step-1">
              <h2>To create a report, click the 'NEW REPORT' button in the sidebar</h2>
              <img className="pic1" src={Pic1} alt=""/>
            </div>
            <div className="step-2">
              <h2>Created reports will show up underneath the 'NEW REPORT' button, with the most recent being at the top</h2>
              <img className="pic2" src={Pic2} alt=""/>
            </div>
            <div className="step-3">
              <h2>Clicking on a report will show the entries for that report</h2>
              <img className="pic3" src={Pic3} alt="" />
            </div>
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