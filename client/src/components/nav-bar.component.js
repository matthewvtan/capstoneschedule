import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../CapstoneLogo1x.png";

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }
  
  render() {

    const show = (this.state.menu) ? "show" : "" ;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
            <span className="navbar-toggler-icon"></span>
        </button>
        <img src={logo} width="30" height="30" />
        <Link to="/" className="navbar-brand">Capstone Schedule</Link>
        <div className={"collapse navbar-collapse " + show}>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">List</Link>
            </li>
            <li>
              <Link to="/create" className="nav-link">Add</Link>
            </li>
            <li>
              <Link to="/calendar" className="nav-link">Calendar</Link> 
            </li>
            <li>
              <Link to="/export" className="nav-link">Export</Link> 
            </li>
          </ul>  
        </div>
      </nav>
    )
  }
} 