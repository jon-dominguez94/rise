import React from 'react';

class Navpath extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      path: ''
    };
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps);
    // debugger;
    let links = ['home'];
    if (nextProps.path.includes("login") || nextProps.path.includes("signup") || nextProps.path === "/home") {
      // alert('session');
      links = [];
    } else if (nextProps.path !== "/home") {
      links = links.concat(nextProps.path.split("/").filter(Boolean));
    } 

    if (nextProps.path.includes('reports')){
      links.splice(2,1);
    }
    // console.log(links);
    this.setState({
      path: links
    });
    // debugger
  }

  render() {
    if(this.state.path === ''){
      return <div></div>;
    }
    return (
      <div>{this.state.path.join(' ')}</div>
    );
  }
}

export default Navpath;