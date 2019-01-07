import React from 'react';
import SingleReportLink from './single_report_links';

class ReportLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
      week: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.fetchUserReports(this.props.user.id);
  }

  componentWillReceiveProps(newState){
    console.log(newState);
    this.setState({
      reports: newState.reports,
      week: newState.week
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newReport = {
      week: this.state.week,
    };
    this.props.composeReport(newReport)
      // .then(res => console.log(res.errors));
      .then(res => {
        if (res.errors === undefined) {
          this.setState({ week: '', });
          this.props.fetchUserReports(this.props.user.id);
        }
      });
  }

  render() {
    return (
      <div className="navbar-links">
        <span className="bar-link user-greet">{this.props.user.fname}'s Reports</span>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="grp-form">
            <input type="text"
              value={this.state.week}
              onChange={this.update('week')}
              placeholder="Week Number"
            />
            <input type="submit" value="Create Report" />
          </div>
        </form>
        {this.state.reports.map(report => (
          <SingleReportLink key={report._id} report={report}/>
        ))}
      </div>
    )
  }
}

export default ReportLinks;