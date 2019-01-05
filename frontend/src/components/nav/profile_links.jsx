import React from "react";
import { NavLink } from "react-router-dom";

const HomeLinks = props => (
  <div className="navbar-links">
    <span className="bar-link user-greet">Hello, {props.user.fname}!</span>
    <NavLink className="bar-link" to={'/home'} activeClassName="selected">Home</NavLink>

    <NavLink className="bar-link" to={"/profile"} activeClassName="selected">
      Profile
    </NavLink>
    <NavLink className="bar-link" to={"/goals"} activeClassName="selected">
      Goals
    </NavLink>
    <NavLink className="bar-link" to={"/roles"} activeClassName="selected">
      Roles
    </NavLink>
    <hr />
    <NavLink className="bar-link" to={"/info"} activeClassName="selected">
      Account Info
    </NavLink>
    <button className="bar-link" onClick={() => props.logout()}>
      Sign Out
    </button>
  </div>
);

export default HomeLinks;