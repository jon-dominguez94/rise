import React from 'react';

class ReportsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchReport(this.props.match.params.id);
  }

  render() {
    debugger
    if (this.props.report == undefined) return <div></div>
    return (
      <div>{this.props.report.week}</div>
    );
  }
}

export default ReportsPage;