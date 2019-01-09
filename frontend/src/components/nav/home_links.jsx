import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeLinks = props => (
  <div className="navbar-links">
    <span className="bar-link user-greet">Hello, {props.user.fname}!</span>
    <hr />
    {/* <NavLink className="bar-link" to={'/profile'} activeClassName="selected">Profile</NavLink> */}

    <NavLink className="bar-link" to={"/reports"} activeClassName="selected">
      Reports
    </NavLink>
      
    <NavLink
      className="bar-link"
      to={"/profile/goals"}
      activeClassName="selected"
    >
      Goals
    </NavLink>
    <NavLink
      className="bar-link"
      to={"/profile/roles"}
      activeClassName="selected"
    >
      Roles
    </NavLink>
    
    <NavLink
      className="bar-link"
      to={"/profile/projects"}
      activeClassName="selected"
    >
      Projects
    </NavLink>
    <NavLink className="bar-link" to={"/reminders"} activeClassName="selected">
      Reminders
    </NavLink>
    <hr />
    <NavLink className="bar-link" to={"/home"} activeClassName="selected">
      Home
    </NavLink>
    <NavLink
      className="bar-link"
      to={"/profile/account"}
      activeClassName="selected"
    >
      Account Info
    </NavLink>
    <button className="bar-link" onClick={() => props.logout()}>
      Sign Out
    </button>
  </div>
);

export default HomeLinks;