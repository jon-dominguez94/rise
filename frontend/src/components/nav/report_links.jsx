import React from 'react';
import { NavLink } from 'react-router-dom';

const ReportLinks = (props) => (
  <div className="navbar-links">
    <span className="bar-link user-greet">Hello, {props.user.fname}!</span>
    <hr />
  </div>
);

export default ReportLinks;