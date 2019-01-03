import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeLinks = (props) => (
  <div className="navbar-links">
    <span className="bar-link user-greet">Hi, {props.user.fname}!</span>
    <NavLink className="bar-link" to={'/profile'}>Profile</NavLink>
    <NavLink className="bar-link" to={'/goals'}>Goals</NavLink>
    <NavLink className="bar-link" to={'/reports'}>Reports</NavLink>
    <hr />
    <NavLink className="bar-link" to={'/reminder'}>Reminders</NavLink>
    <button className="bar-link" onClick={() => props.logout()}>Sign Out</button>
  </div>
);

export default HomeLinks;