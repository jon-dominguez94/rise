import React from 'react';
import '../../../css/report_page.css';
import { NavLink } from 'react-router-dom';
class ReportsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchUserEntries(this.props.user.id);
  //   this.props.fetchUserProjects(this.props.user.id);
  //   this.props.fetchUserRoles(this.props.user.id);
  //   this.props.fetchUserGoals(this.props.user.id);
  // }

  componentWillMount() {
      this.props.fetchUserProjects(this.props.user.id)
      this.props.fetchUserRoles(this.props.user.id)
      this.props.fetchUserGoals(this.props.user.id)
      this.props.fetchUserEntries(this.props.user.id)
  }

  render() {

    if (Object.values(this.props.entries).length === 0 || Object.values(this.props.report).length === 0 || Object.values(this.props.goals).length === 0 || Object.values(this.props.roles).length === 0 || Object.values(this.props.projects).length === 0) return null

    // debugger
    return (
      <div className='report-page-container'>
        <div className='report-page-title'>Week {this.props.report.week} Entries</div>
        <div className='all-entries-div'>

        {this.props.entries.map(entry => {
          // const {role, goal, project} = this.props;

          return (
              <div className='report-entry' key={entry.id}>
              
              {entry.description}
              <br></br>
              {entry.importance}
              <br></br>
              {entry.project}
              <br></br>
              {/* {console.log(this.props.projects[entry.project])} */}
              {/* {console.log(this.props.roles[entry.role])} */}
              {/* {console.log(this.props.goals[entry.goal])} */}
               {this.props.projects[entry.project].title}
               <br></br>
               {this.props.goals[entry.goal].title}
              <br></br>
               {this.props.roles[entry.role].title}
              
                         

              </div>
          )
        })}
        </div>
        
        
        <NavLink to={`/reports/${this.props.report._id}/new_entry`}>Create New Entry</NavLink>
      </div>
    );
  }
}

export default ReportsPage;