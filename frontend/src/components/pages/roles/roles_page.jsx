import React from 'react';
import SingleRole from './single_role';
import '../../../css/profile.css';

class RolesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      roles: [],
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserRoles(this.props.user.id);
  }

  componentWillReceiveProps(newState) {
    // console.log(newState);
    this.setState({
      roles: newState.roles,
      errors: newState.errors
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newRole = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.composeRole(newRole)
      // .then(res => console.log(res.errors));
      .then(res => {
        if (res.errors === undefined) {
          this.setState({ title: '', description: '' });
        }
      });
  }

  renderErrors() {
    // debugger
    if (Object.keys(this.state.errors).length === 0) {
      return (
        <div></div>
      );
    } else {
      return (
        // <div className="errors-container">
        <div>
          {/* <ul className="errors-list"> */}
          <ul>
            {Object.keys(this.state.errors).map((error, i) => (
              <li key={`error-${i}`}>
                {/* <li className="error-item" key={`error-${i}`}> */}
                {this.state.errors[error]}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  render() {
    if (this.state.roles === undefined) {
      return (
        <div className="no-roles"></div>
      );
    }
    else {
      return (
        <div className="roles-page-wrapper">
          <div className="role-form-wrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="role-form">
                <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title"
                />
                <textarea
                  value={this.state.description}
                  onChange={this.update('description')}
                  placeholder="Description"
                ></textarea>
                <input type="submit" value="Create Role" />
              </div>
            </form>
          </div>
          {this.state.roles.map(role => (
            <SingleRole key={role.id} role={role} updateRole={this.props.updateRole} />
          ))}
          {this.renderErrors()}
        </div>
      );
    }
  }
}

export default RolesPage;