import React from 'react';
import ElementItem from './element_item';
import '../../../css/profile.css';

class ProfileElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      elements: [],
      errors: {}
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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newElement = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.composeElement(newElement)
      // .then(res => console.log(res.errors));
      .then(res => {
        if (res.errors === undefined) {
          this.setState({ title: '', description: '' });
          // this.props.fetchUserElements(this.props.user.id);
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
      return (
        <div className="no-grps"></div>
      );
    }
    else {
      return (
        <div className="grps-page-wrapper">
          <div className="all-elements-container">
            <div className="element-form-wrapper">
              <form onSubmit={this.handleSubmit}>
                <div className="element-form">
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
                  <input type="submit" value={this.label} />
                </div>
              </form>
            </div>
          </div>
          {this.state.elements.map(element => (
            <ElementItem key={element._id} element={element} label={this.props.label} updateElement={this.props.updateElement} />
          ))}
          {this.renderErrors()}
        </div>
      );
    }
  }
}

export default ProfileElement;