import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/session_form.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = theme => ({

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})



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

  // componentDidMount(){
  //   console.log('signup mounted');
  // }

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
    // debugger
    if(Object.keys(this.state.errors).length === 0){
      return (
        <div></div>
      );
    } else {
      return (
        <div className="errors-container">
          <ul className="errors-list">
            {Object.keys(this.state.errors).map((error, i) => (
              <li className="error-item" key={`error-${i}`}>
                {this.state.errors[error]}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="session-form">
              <h1 className="session-title">Join us!</h1>
              <div className="session-input-area">
                <TextField
                  id="outlined-name"
                  label="First Name"
                  className={classes.textField}
                  onChange={this.update("fname")}
                  margin="normal"
                  variant="outlined"
                  value={this.state.fname}
                />
              </div>
              <div className="session-input-area">
                <TextField
                  id="outlined-name"
                  label="Last Name"
                  className={classes.textField}
                  onChange={this.update("lname")}
                  margin="normal"
                  variant="outlined"
                  value={this.state.lname}
                />
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
                <input type="submit" value="Sign Up" />
              </div>
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withStyles(styles)(SignupForm));