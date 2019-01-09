import React from 'react';
import splashLogo from '../../splash.png';
import splashBackground from '../../splash_background.jpg';
import '../../css/splash.css'

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash">
        <img className="splash-background" src={splashBackground} alt="" />
        <div className="splash-container">
          <div className="tagline">Your Career is Calling</div>
          <img className="splash-logo" src={splashLogo} alt="" />
          <div className="one-liner">We help employees get raises and promotions by tracking their goals and accomplishments</div>
        </div>
      </div >
      
    )
  }
}

export default SplashPage;

