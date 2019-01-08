import React from 'react';
import SingleReportLink from './single_report_links';
import '../../css/report_links.css';
import reportsArrow from '../../arrow.png';
import { NavLink } from 'react-router-dom';


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
      week: `${this.state.reports[0].week + 1}`,
    };
    this.props.composeReport(newReport)
      // .then(res => console.log(res.errors));
      .then(res => {
        if (res.errors === undefined) {
          debugger;
          this.setState({ week: '', });
          this.props.fetchUserReports(this.props.user.id);
          this.props.history.push(`/reports/${res.report.data._id}/`);
        }
      });
    
  }

  render() {
    return (
      <div className="r">
      <div className="report-links">
        <span className="home-reports-links">
        <NavLink className="bar-link" to={'/home'} activeClassName="selected">Home</NavLink>
        <div className="reports-arrow-container"><img className="reports-arrow" src={reportsArrow} alt="" /></div>
        <div className="username-reports">Reports</div>
        </span>
      </div>
        <hr />
        <div className="reports">
        <div className="report-links">
        <form className="new-report-form" onSubmit={this.handleSubmit}>
          <div className="grp-form">
            {/* <input className="report-input-field" type="text"
              value={this.state.week}
              onChange={this.update('week')}
              placeholder="Week Number"
            /> */}
            <input type="submit" value="New Report" />
          </div>
        </form>
        <br />
        <br />
        </div>
        {this.state.reports.map(report => (
          <SingleReportLink key={report._id} report={report}/>
        ))}
        </div>
      </div>
    )
  }
}

export default ReportLinks;