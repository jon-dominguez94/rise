import React from 'react';
import SingleReportLink from './single_report_links';

class ReportLinks extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   reports: []
    // };
  }

  componentWillMount(){
    this.props.fetchUserReports(this.props.user.id);
  }

  // componentWillReceiveProps(newState){
  //   console.log(newState);
  //   this.setState({
  //     reports: newState.reports
  //   });
  // }

  render() {
    debugger
    return (
      <div className="navbar-links">
        <span className="bar-link user-greet">Hello, {this.props.user.fname}!</span>
        <hr />
        {this.props.reports.map(report => (
          <SingleReportLink key={report.id} report={report}/>
        ))}
      </div>
    )
  }
}

export default ReportLinks;