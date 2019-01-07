// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const ReportLinks = (props) => (
//   <div className="navbar-links">
//     <span className="bar-link user-greet">Hello, {props.user.fname}!</span>
//     <hr />
//     <NavLink className="bar-link" to={"/reports/1"} activeClassName="selected">
//       Week 1
//     </NavLink>
//     <NavLink className="bar-link" to={"/reports/2"} activeClassName="selected">
//       Week 2
//     </NavLink>
//     <NavLink className="bar-link" to={"/reports/3"} activeClassName="selected">
//       Week 3
//     </NavLink>
//   </div>
// );

// export default ReportLinks;

import React from 'react';
import { NavLink } from 'react-router-dom';

class ReportLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchUserReports(this.props.user.id);
  }

  render() {
    return (
      <div className="navbar-links">
        <span className="bar-link user-greet">Hello, {this.props.user.fname}!</span>
        <hr />
        <NavLink className="bar-link" to={"/reports/1"} activeClassName="selected">
          Week 1
    </NavLink>
        <NavLink className="bar-link" to={"/reports/2"} activeClassName="selected">
          Week 2
    </NavLink>
        <NavLink className="bar-link" to={"/reports/3"} activeClassName="selected">
          Week 3
    </NavLink>
      </div>
    );
  }
}

export default ReportLinks;