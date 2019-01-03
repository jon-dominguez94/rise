import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentUser === true){
      this.props.history.push('/main');
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    if (Object.keys(this.state.errors).length === 0) {
      return (
        <div></div>
      );
    } else {
      return (
        <div className="errors-container">
          <ul className="errors-list">
            {Object.keys(this.state.errors).map((error, i) => (
              <li className="error-item" key={`error-${i}`}>{this.state.errors[error]}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  render(){
    return <div className="session-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="session-form">
            <h1 className="session-title">Welcome back!</h1>
            <div className="session-input-area">
              <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email" />
            </div>
            <div className="session-input-area">
              <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
            </div>
            <div className="session-input-area submit-btn">
              <input type="submit" value="Login" />
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>;
  }
}

export default withRouter(LoginForm);