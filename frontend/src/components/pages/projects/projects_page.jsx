import React from 'react';
import SingleProject from './single_project';
import '../../../css/profile.css';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      projects: [],
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserProjects(this.props.user.id);
  }

  componentWillReceiveProps(newState) {
    // console.log(newState);
    this.setState({
      projects: newState.projects,
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
    let newProject = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.composeProject(newProject)
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
    if (this.state.projects === undefined) {
      return (
        <div className="no-grps"></div>
      );
    }
    else {
      return (
        <div className="grps-page-wrapper">
          <div className="grp-form-wrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="grp-form">
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
                <input type="submit" value="Create Project" />
              </div>
            </form>
          </div>
          {this.state.projects.map(project => (
            <SingleProject key={project._id} project={project} updateProject={this.props.updateProject} />
          ))}
          {this.renderErrors()}
        </div>
      );
    }
  }
}

export default ProjectsPage;