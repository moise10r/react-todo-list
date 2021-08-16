import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaProjectDiagram, FaCalendarAlt } from 'react-icons/fa';
import { ImMail2 } from 'react-icons/im';
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
          <li className="link ">
            <a href="#2" className="active">
              <IconContext.Provider value={{ className: 'icon' }}>
                <AiTwotoneHome />
              </IconContext.Provider>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="link">
            <a href="#2">
              {' '}
              <IconContext.Provider value={{ className: 'icon' }}>
                <FaProjectDiagram />
              </IconContext.Provider>
              <span>Project</span>
            </a>
          </li>
          <li className="link">
            <a href="#2">
              {' '}
              <IconContext.Provider value={{ className: 'icon' }}>
                <FaCalendarAlt />
              </IconContext.Provider>
              <span>Calendar</span>
            </a>
          </li>
          <li className="link">
            <a href="#2">
              {' '}
              <IconContext.Provider value={{ className: 'icon' }}>
                <ImMail2 />
              </IconContext.Provider>
              <span>Mail</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Aside;
