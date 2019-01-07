import React from 'react';

class SingleGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    let newGoal = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.updateGoal(newGoal)
      // .then(res => console.log(res.errors));
      .then(res => {
        if (res.errors === undefined) {
          this.setState({ title: '', description: '' });
        }
      });
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