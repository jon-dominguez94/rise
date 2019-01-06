import React from 'react';
import SingleGoal from './single_goal';

class GoalsPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      goals: []
    };
  }

  componentWillMount(){
    this.props.fetchUserGoals(this.props.user.id);
  }

  componentWillReceiveProps(newState){
    this.setState({ goals: newState.goals });
  }

  render() {
    if(this.state.goals.length === 0){
      return (
        <div>No goals yet!</div>
      );
    }
    else {
      return (
        <div>
          <h2>All goals</h2>
          {this.state.goals.map(goal => (
            <SingleGoal key={goal.id} title={goal.title} description={goal.description} />
          ))}
        </div>
      );
    }
  }
}

export default GoalsPage;