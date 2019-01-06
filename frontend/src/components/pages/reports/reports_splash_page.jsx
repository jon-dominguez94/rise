import React from 'react';
import settingsLogo from '../../../profile.png';
import '../../../css/settings.css';

export default function profile_splash_page() {
  return (
    <div className="settings-logo-container">
      <img className="settings-logo" src={settingsLogo} alt="" />
    </div>
  )
}