import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={'/profile'}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="navbar-links">
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <Link to="/">
          <h1>Rise</h1>
        </Link>
        <hr/>
        {this.getLinks()}
      </div>
    );
  }
}

export default Navbar;