import React from 'react';
import SingleGoal from './single_goal';

class GoalsPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
      goals: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.fetchUserGoals(this.props.user.id);
  }

  componentWillReceiveProps(newState){
    this.setState({ goals: newState.goals });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newGoal = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.composeGoal(newGoal);
    this.setState({ title: '', description: ''});
  }

  render() {
    if(this.state.goals.length === 0){
      return (
        <div className="no-goals"></div>
      );
    }
    else {
      return (
        <div className="goals-page-wrapper">
          <div className="goal-form-wrapper">
            <form className="goal-form">
              <input type="text"/>
            </form>
          </div>
          {this.state.goals.map(goal => (
            <SingleGoal key={goal.id} goal={goal} updateGoal={this.props.updateGoal}/>
          ))}
        </div>
      );
    }
  }
}

export default GoalsPage;