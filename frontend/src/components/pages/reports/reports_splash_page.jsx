import React from 'react';
import settingsLogo from '../../../profile.png';
import Pic1 from './pic1.png';
import Pic2 from './pic2.png';
import '../../../css/settings.css';


class ReportsSplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.reports.length == 0) {
      return (
        <div className="instructions-field">
          <div className="instructions">
            {/* <h1>CREATE YOUR FIRST REPORT</h1> */}
            <div className="step-1">
              <h2>TO CREATE A REPORT, CLICK THE NEW REPORT BUTTON IN THE SIDEBAR</h2>
              <img className="pic1" src={Pic1} alt=""/>
            </div>
            <div className="step-2">
              <h2>CREATED REPORTS WILL SHOW UP UNDERNEATH THE 'NEW REPORT' BUTTON, WITH THE MOST RECENT BEING AT THE TOP</h2>
              <img className="pic2" src={Pic2} alt=""/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="settings-logo-container">
          <img className="settings-logo" src={settingsLogo} alt="" />
        </div>
      )
    }
  }
}

  export default ReportsSplashPage;