import React from 'react';
import ElementItem from './element_item';
import '../../../css/profile.css';

class ProfileElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      elements: [],
      errors: {},
      msg: ""
    };

    this.label = `Create ${this.props.label}`;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserElements(this.props.user.id);
  }

  componentWillReceiveProps(newState) {
    // console.log(newState);
    this.setState({
      elements: newState.elements,
      errors: newState.errors
    });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
        msg: ""
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newElement = {
      title: this.state.title,
      description: this.state.description
    };
    this.props
      .composeElement(newElement)
      // .then(res => console.log(res.errors));
      .then(res => {
        if (res.errors === undefined) {
          this.setState({
            title: "",
            description: "",
            msg: "Created Successfully"
          });
          // this.props.fetchUserElements(this.props.user.id);
        } else {
          this.setState({ msg: "Please correct errors listed below" });
        }
      })
      .then(() => {
        setTimeout(() => {
          this.setState({ msg: "" });
        }, 2000);
      });
  }

  renderMsg() {
    if (this.state.msg === "") {
      return <div></div>;
    } else {
      return (
        <div className="msg-container">
          <p>{this.state.msg}</p>
        </div>
      );
    }
  }

  renderErrors() {
    // debugger
    if (Object.keys(this.state.errors).length === 0) {
      return <div />;
    } else {
      return (
        <div className="errors-container ib">
          {/* <div> */}
          <ul className="errors-list">
            {/* <ul> */}
            {Object.keys(this.state.errors).map((error, i) => (
              // <li key={`error-${i}`}>
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
    if (this.state.elements === undefined) {
      return <div className="no-grps" />;
    } else {
      return (
        <div className="grps-page-wrapper">
          <div className="all-elements-container new-element">
            <div className="el-label">New {this.props.label}</div>
            <div className="input-background" style={{background: '#051e3e'}}>
              <div className="element-form-wrapper">
                <form onSubmit={this.handleSubmit}>
                  <div className="element-form">
                    <input
                      type="text"
                      value={this.state.title}
                      onChange={this.update("title")}
                      placeholder="Title"
                    />
                    <div className="elem-desc">
                      <hr />
                      <textarea
                        value={this.state.description}
                        onChange={this.update("description")}
                        placeholder="Description"
                      />
                      <button className="profile-submit-btn">
                        {this.label}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="el-label">All {this.props.label}s</div>
          {this.state.elements.map(element => (
            <ElementItem
              key={element._id}
              element={element}
              label={this.props.label}
              updateElement={this.props.updateElement}
            />
          ))}
          {this.renderErrors()}
          {this.renderMsg()}
        </div>
      );
    }
  }
}

export default ProfileElement;