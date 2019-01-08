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
    this.props.fetchUserReports(this.props.user.id)
  }

  render() {
    if (this.props.report === undefined || this.props.entries === undefined) return <div></div>
    // debugger
    return (
      <div className='report-page-container'>
        <div className='report-page-title'>Week {this.props.report.week} Entries</div>
        <div className='all-entries-div'>
        {this.props.entries.map(entry => {
          return (
            // <div>
              <div className='report-entry' key={entry.id}>
              {entry.description}
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