import React from 'react';
import '../../css/profile.css';

class ProfilePage extends React.Component{
  constructor(props){
    super(props);
    // debugger
    this.state = {
      fname: props.user.fname,
      lname: props.user.lname,
      email: props.user.email,
      password: '',
      password2: '',
      phone: props.user.phone
    };
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      phone: this.state.phone,
    };

    this.props.signup(user);
  }

  render() {
    return(
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="session-form">
            <h1 className="session-title">Your info</h1>
            <div className="session-input-area">
              <input type="text" value={this.state.fname} onChange={this.update("fname")} placeholder="First Name" />
            </div>
            <div className="session-input-area">
              <input type="text" value={this.state.lname} onChange={this.update("lname")} placeholder="Last Name" />
            </div>
            <div className="session-input-area">
              <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email" />
            </div>
            <div className="session-input-area">
              <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
            </div>
            <div className="session-input-area">
              <input type="password" value={this.state.password2} onChange={this.update("password2")} placeholder="Confirm Password" />
            </div>
            <div className="session-input-area">
              <input type="text" value={this.state.phone} onChange={this.update("phone")} placeholder="Phone" />
            </div>
            <div className="session-input-area submit-btn">
              <input type="submit" value="Update" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilePage;