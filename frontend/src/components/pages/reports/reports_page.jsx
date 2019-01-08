import React from 'react';
import '../../../css/report_page.css';

class ReportsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUserEntries(this.props.user.id);
    this.props.fetchUserProjects(this.props.user.id);
    this.props.fetchUserRoles(this.props.user.id);
    this.props.fetchUserGoals(this.props.user.id);
  }

  render() {

    if (this.props.report === undefined || this.props.entries === undefined || this.props.goals === undefined || this.props.projects === undefined || this.props.roles === undefined) return <div>Test</div>
    // debugger
    return (
      <div className='report-page-container'>
        <div className='report-page-title'>Week {this.props.report.week} Entries</div>
        <div className='all-entries-div'>
        {/* {this.props.roles['5c32e64e364a064cbe84196f'].title} */}

        {this.props.entries.map(entry => {
          return (
            // <div>
              <div className='report-entry' key={entry.id}>
              
              {entry.description}
              <div>

              {this.props.roles[entry.role.title]}
              {this.props.goals[entry.goal.title]}
              {this.props.projects[entry.project.title]}
              
              </div>
              {/* {this.props.goals[entry.goal.title]}
              {this.props.projects[entry.project.title]} */}
              {/* {entry.role} */}
              {/* {entry.role} */}
              {/* {this.props.roles['5c32e64e364a064cbe84196f'].title} */}


              {/* {this.props.goals[`${entry.goal}`].title} */}
              {/* {this.props.roles[entry.role].title}
              {this.props.projects[entry.project].title} */}

              {/* {this.props.goals}
              {this.props.roles}
              {this.props.projects} */}
                         

              </div>
            // </div>
          )
        })}
        </div>

      </div>
      // <div>{this.props.report.week}</div>
    );
  }
}

export default ReportsPage;