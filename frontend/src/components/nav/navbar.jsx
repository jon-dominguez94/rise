import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import HomeLinksContainer from './home_links_container';
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
        <Switch>
          <Route exact path={'/home'} component={HomeLinksContainer}/>
          <Route exact path={'/profile'} component={HomeLinksContainer}/>
        </Switch>
      );
    } else {
      return(
        <div className="navbar-links">
          <NavLink className="bar-link" to={"/login"} activeClassName="selected">
            Login
          </NavLink>
          <NavLink className="bar-link" to={"/signup"} activeClassName="selected">
            Sign Up
          </NavLink>
          <button
            onClick={() => this.props.login({email: 'test@test.test', password: 'password'})}
            className="bar-link" 
          >Demo Login</button>
        </div>
      );
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