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
      this.props.fetchUserReports(this.props.user.id)
      this.props.fetchUserProjects(this.props.user.id)
      this.props.fetchUserRoles(this.props.user.id)
      this.props.fetchUserGoals(this.props.user.id)
      this.props.fetchUserEntries(this.props.user.id)
  }

  render() {
    // if (Object.values(this.props.report).length === 1){
    //   return (
    //     <div className='new-entry-div'>
    //     <NavLink className='new-entry' to={`/reports/${this.props.report._id}/new_entry`}>New Entry</NavLink>
    //     </div>
    //   )
    // }

    if(this.props.report === undefined){
      return <div></div>;
    }
    
    if ( Object.values(this.props.entries).length === 0 || Object.values(this.props.goals).length === 0 || Object.values(this.props.roles).length === 0 || Object.values(this.props.projects).length === 0){ 
      return (
        <div className="single-entry">
          <div className='new-entry-div no-others'>
            <NavLink className='new-entry' to={`/reports/${this.props.report._id}/new_entry`}>New Entry</NavLink>
          </div>
        </div>
      )
    }

    // if (Object.values(this.props.entries).length === 0 && Object.values(this.props.report) === 1){
    //   return (
    //     <div className='new-entry-div'>
    //       <NavLink className='new-entry' to={`/reports/${this.props.report._id}/new_entry`}>New Entry</NavLink>
    //     </div>
    //   )
    // }


    // debugger
    return (
      <div className='report-page-container'>
        <div className='report-page-title'>Week {this.props.report.week} Entries</div>
        <div className='all-entries-div'>

        {this.props.entries.map(entry => {
          // const {role, goal, project} = this.props;

          return (
              <div className='report-entry' key={entry.id}>
              <div className='rep-entry-description'><p>{entry.description}</p></div>
              <div className='rep-entry-info'>
                <div className='entry-dropdown2'>
                  <label>
                    RATING
                  <select>
                      <option>
                        {entry.importance}
                      </option>
                    </select>
                  </label>
                  </div>
                <div className='entry-dropdown2'>
                  <label>
                    PROJECT
                  <select>
                      <option>
                        {this.props.projects[entry.project].title}
                      </option>
                    </select>
                  </label>
                </div>
                <div className='entry-dropdown2'>
                  <label>
                    GOAL
                  <select>
                      <option>
                        {this.props.goals[entry.goal].title}
                      </option>
                    </select>
                  </label>
                </div>
                <div className='entry-dropdown2'>
                <label>
                  ROLE
                  <select>
                    <option>
                      {this.props.roles[entry.role].title}
                    </option>
                  </select>
                </label>
                </div>
              </div>
                         

              </div>
          )
        })}
        </div>
        
        <div className='new-entry-div'>
          <NavLink className='new-entry'to={`/reports/${this.props.report._id}/new_entry`}>New Entry</NavLink>
        </div>
      </div>
    );
  }
}

export default ReportsPage;