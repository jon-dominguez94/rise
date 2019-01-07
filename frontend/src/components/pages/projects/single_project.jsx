import React from 'react';

class SingleProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.project.id,
      title: props.project.title,
      description: props.project.description,
      msg: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
        msg: ''
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newProject = Object.assign({}, this.props.project, this.state);
    this.props.updateProject(newProject)
      .then(res => {
        if (res.errors === undefined) {
          this.setState({ msg: 'Successful' });
        } else {
          this.setState({ msg: 'Please correct errors listed below' });
        }
      })
      .then(() => {
        setTimeout(() => {
          this.setState({ msg: '' })
        }, 1500);
      });
  }

  renderMsg() {
    if (this.state.msg === '') {
      return (
        <div></div>
      );
    } else {
      return (
        <div className="msg-container">
          <p>{this.state.msg}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="all-projects-container">
        <div className="project-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="project-form">
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
              <input type="submit" value="Update Project" />
            </div>
          </form>
          {this.renderMsg()}
        </div>
      </div>
    );
  }
}

export default SingleProject;