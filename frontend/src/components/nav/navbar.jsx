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
          <span className="bar-link">Hi, {this.props.user.fname}!</span>
          <button className="bar-link" onClick={this.logoutUser}>Sign Out</button>
          <hr/>
          <NavLink className="bar-link" to={'/profile'}>Profile</NavLink>
        </div>
      );
    } else {
      return <div className="navbar-links">
          <NavLink className="bar-link" to={"/login"} >
            Login
          </NavLink>
          <NavLink className="bar-link" to={"/signup"} >
            Sign Up
          </NavLink>
          <button
            onClick={() => this.props.login({email: 'test@test.test', password: 'password'})}
            className="bar-link" 
          >Demo Login</button>
        </div>;
    }
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <Link to="/">
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