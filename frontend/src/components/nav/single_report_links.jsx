import React from 'react';
import { NavLink } from 'react-router-dom';
import report_links_container from './report_links_container';

class SingleReportLink extends React.Component {
  render() {
    return (
        <NavLink className="bar-link" to={`/reports/${this.props.report._id}`} activeClassName="selected">
          Week {this.props.report.week}
        </NavLink>
    );
  }
}

export default SingleReportLink;