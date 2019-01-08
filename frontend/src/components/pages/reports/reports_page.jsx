import React from 'react';

class ReportsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchReport(this.props.match.params.id);
    this.props.fetchUserEntries(this.props.user.id);
  }

  render() {
    if (this.props.report === undefined || this.props.entries === undefined) return <div></div>
    // debugger
    return (
      <div>


        {this.props.entries.map(entry => {
          return (
            <div key={entry.id}>
              {entry.description}
            </div>
          )
        })}
      
      </div>
      // <div>{this.props.report.week}</div>
    );
  }
}

export default ReportsPage;