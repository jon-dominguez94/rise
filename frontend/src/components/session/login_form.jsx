import React from 'react';
import { withRouter } from 'react-router-dom';
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
    width: 250,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 250,
  },
});

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})


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


  componentDidMount() {
    this.props.clearErrors();
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
        <div className="errors-container on-login">
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
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="session-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="session-form">
                <h1 className="session-title">Welcome back!</h1>
                <div className="session-input-area">
                <TextField
                  id="outlined-email"
                  label="Email"
                  className={classes.textField}
                  onChange={this.update("email")}
                  margin="normal"
                  variant="outlined"
                  value={this.state.email}
                />
                </div>
                <div className="session-input-area">
                <TextField
                  id="outlined-password"
                  label="Password"
                  className={classes.textField}
                  onChange={this.update("password")}
                  margin="normal"
                  variant="outlined"
                  value={this.state.password}
                  type="password"
                />
                </div>
                <div className="session-input-area submit-btn">
                  <Button
                    variant="contained"
                    onClick={this.handleSubmit}
                    color="primary"
                    className={classes.button}
                  >
                    Login
                  </Button>
                  {/* <input type="submit" value="Login" /> */}
                </div>
                {this.renderErrors()}
              </div>
            </form>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withStyles(styles)(LoginForm));