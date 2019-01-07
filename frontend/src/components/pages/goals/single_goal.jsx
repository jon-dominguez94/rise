import React from 'react';

class SingleGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.goal.id,
      title: props.goal.title,
      description: props.goal.description
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props.goal);
    let newGoal = Object.assign({}, this.props.goal, this.state);
    this.props.updateGoal(newGoal);
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
        </div>
      </div>
    );
  }
}

export default SingleGoal;