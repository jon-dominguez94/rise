import React from 'react';
import splashLogo from '../../splash.png';
import '../../css/splash.css'

class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Your Career is Calling</h1>
        
          <div className="splash-logo-container"></div>
          <img className="splash-logo" src={splashLogo} alt="" />
          We help employees get raises and promotions by tracking their goals and accomplishments
        <footer>
          Copyright &copy; 2019 Rise
        </footer>
      </div>
    )
  }
}

export default SplashPage;