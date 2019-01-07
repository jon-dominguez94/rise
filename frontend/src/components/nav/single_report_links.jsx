import React from 'react';
import { NavLink } from 'react-router-dom';
import report_links_container from './report_links_container';
import '../../css/report_links.css';


class SingleReportLink extends React.Component {
  render() {
    return (
      <div className="report-links">
        <NavLink className="report-link" to={`/reports/${this.props.report._id}`} activeClassName="selected">
          Week {this.props.report.week}
        </NavLink>
      </div>
    );
  }
}

export default SingleReportLink;