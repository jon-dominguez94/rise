import React from 'react';
import { NavLink } from 'react-router-dom';

class Navpath extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      path: ''
    };

    this.renderLinks = this.renderLinks.bind(this);
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps);
    // debugger;
    let links = [];
    if (nextProps.path.includes("login") || nextProps.path.includes("signup") || nextProps.path === "/home") {
      // alert('session');
      links = [];
    } else if (nextProps.path !== "/home") {
      links = links.concat(nextProps.path.split("/").filter(Boolean));
    } 

    if (nextProps.path.includes('reports')){
      links.splice(1,1);
    }
    // console.log(links);
    this.setState({
      path: links
    });
    // debugger
  }

  renderLinks(){
    return this.state.path.map((link, i) => {
      const linkpath = this.state.path.slice(0, i+1);
      return (
        <div className="link-wrapper">
          <NavLink to={`/${linkpath}`}>
            {link}
          </NavLink>
          <i class="fa fa-long-arrow-right" />
        </div>
      );
    });
    // const with_arrows = linkdivs.join(<i class="far fa-long-arrow-right" />);
    // return with_arrows;
  }

  render() {
    if(this.state.path === ''){
      return <div></div>;
    }
    return (

      <div className="navpath-wrapper">
        <div className="link-wrapper">
          <NavLink to={`/home`}>Home</NavLink>
          <i class="fa fa-long-arrow-right" />
        </div>
        {this.renderLinks()}
      </div>
      // <div>{this.state.path.join(' ')}
      //   <i class="fa fa-long-arrow-right"></i>
      // </div>
    );
  }
}

export default Navpath;