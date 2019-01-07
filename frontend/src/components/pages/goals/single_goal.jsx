import React from 'react';

class SingleGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.goal.id,
      title: props.goal.title,
      description: props.goal.description,
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
    let newGoal = Object.assign({}, this.props.goal, this.state);
    this.props.updateGoal(newGoal)
      .then(res => {
        if (res.errors === undefined) {
          this.setState({ msg: 'Success' });
        }
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
      <div className="all-goals-container">
        <div className="goal-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="goal-form">
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
              <input type="submit" value="Update Goal" />
            </div>
          </form>
          {this.renderMsg()}
        </div>
      </div>
    );
  }
}

export default SingleGoal;