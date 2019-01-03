import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../css/navbar.css';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e){
    e.preventDefault();
    this.props.logout();
  }

  getLinks(){
    if(this.props.loggedIn){
      return(
        <div className="navbar-links">
          <span className="navbar-link">Hi, {this.props.user.fname}!</span>
          <button className="navbar-link" onClick={this.logoutUser}>Sign Out</button>
          <hr/>
          <NavLink className="navbar-link" to={'/profile'}>Profile</NavLink>
        </div>
      );
    } else {
      return <div className="navbar-links">
          <NavLink className="navbar-link" to={"/login"} >
            Login
          </NavLink>
          <NavLink className="navbar-link" to={"/signup"} >
            Sign Up
          </NavLink>
          <button className="navbar-link" >Demo Login</button>
        </div>;
    }
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <Link className="navbar-link" to="/">
          <div className="logo-container">
            <h1 className="header-one">RISE</h1>
          </div>
        </Link>
        <hr/>
        {this.getLinks()}
        <hr/>
      </div>
    );
  }
}

export default Navbar;