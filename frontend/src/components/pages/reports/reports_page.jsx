import React from 'react';

class ReportsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchReport(this.props.match.params.id);
  }

  render() {
    // if (this.props.report == undefined) return <div></div>
    return (
      <div></div>
      // <div>{this.props.report.week}</div>
    );
  }
}

export default ReportsPage;