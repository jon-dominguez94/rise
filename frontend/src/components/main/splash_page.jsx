import React from 'react';
import splashLogo from '../../splash.png';
import splashBackground from '../../splash_background.jpg';
import '../../css/splash.css'

class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div className="tag-container">
            <div className="tagline">Your Career is Calling</div>
            <img className="splash-background" src={splashBackground} alt="" />
            <img className="splash-logo" src={splashLogo} alt="" />
            <div className="one-liner">We help employees get raises and promotions by tracking their goals and accomplishments</div>
          </div>
        </main>
      </div>
    )
  }
}

export default SplashPage;