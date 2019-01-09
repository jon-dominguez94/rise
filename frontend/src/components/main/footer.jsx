import React from 'react';
import BenPhoto from '../../Ben_Cowden.jpg';
import MarkPhoto from '../../Mark_Kopec.png';
import SameehPhoto from '../../Sameeh_Khan.jpg';
import TedPhoto from '../../Ted_Wildenradt.jpg';
import JonPhoto from '../../Jon_Dominguez2.jpg';
import '../../css/footer.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render(){

    return(
      <div className="footer">
        <div id="engineering-team">
          <h1>Our Engineering Team</h1>
        </div>
        <div className="profile-photos-container">
          <a href="https://www.linkedin.com/in/jondominguez94/">
          <div className="profile-photo">
            <div className="photo-holder" id="jon-photo">
              <img src={JonPhoto} alt=""/>
            </div>
            <div className="photo-name">
              <h3>Jon Dominguez</h3>
            </div>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/mark-kopec/">
          <div className="profile-photo">
            <div className="photo-holder">
              <img src={MarkPhoto} alt=""/>
            </div>
            <div className="photo-name">
              <h3>Mark Kopec</h3>
            </div>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/ted-wildenradt/">
          <div className="profile-photo">
            <div className="photo-holder">
              <img src={TedPhoto} alt=""/>
            </div>
            <div className="photo-name">
              <h3>Ted Wildenradt</h3>
            </div>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/sameeh-khan-877657b4/">
          <div className="profile-photo">
            <div className="photo-holder">
              <img src={SameehPhoto} alt=""/>
            </div>
            <div className="photo-name">
              <h3>Sameeh Khan</h3>
            </div>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/benjamin-j-cowden-a22804128/">
          <div className="profile-photo">
            <div className="photo-holder">
              <img src={BenPhoto} alt=""/>
            </div>
            <div className="photo-name">
              <h3>Ben Cowden</h3>
            </div>
          </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer