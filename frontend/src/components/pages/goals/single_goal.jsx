import React from 'react';

class SingleGoal extends React.Component{
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h3>{this.props.description}</h3>
      </div>
    );
  }
}

export default SingleGoal;