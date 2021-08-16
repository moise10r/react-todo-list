import React, { Component } from 'react';
import logo from '../assets/image/logo.png';

class Aside extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="aside-main-wrapper">
        <div className="main-logo-wrapper flex-center">
          <div className="logo-wrapper">
            <img src={logo} alt="" />
          </div>
          <span>
            Tasks Book
          </span>
        </div>
        <ul className="link-list flex-start">
          <li className="link"><a href="#2">Dashboard</a></li>
          <li className="link"><a href="#2">Project</a></li>
          <li className="link"><a href="#2">Calender</a></li>
          <li className="link"><a href="#2">Mail</a></li>
        </ul>
      </div>
    );
  }
}

export default Aside;
