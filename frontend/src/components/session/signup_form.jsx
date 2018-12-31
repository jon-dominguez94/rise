import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/signup_form.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      password2: '',
      phone: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors });
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

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <h1 className="header-one">Join us!</h1>
            <div>
              <input type="text" value={this.state.fname} onChange={this.update("fname")} placeholder="First Name" />
            </div>
            <div>
              <input type="text" value={this.state.lname} onChange={this.update("lname")} placeholder="Last Name" />
            </div>
            <div>
              <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email" />
            </div>
            <div>
              <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
            </div>
            <div>
              <input type="password" value={this.state.password2} onChange={this.update("password2")} placeholder="Confirm Password" />
            </div>
            <div>
              <input type="text" value={this.state.phone} onChange={this.update("phone")} placeholder="Phone" />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>;
  }
}

export default withRouter(SignupForm);