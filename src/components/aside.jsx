import React, { Component } from 'react';
import propTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { AiTwotoneHome, AiOutlineMenuFold } from 'react-icons/ai';
import { FaProjectDiagram, FaCalendarAlt } from 'react-icons/fa';
import { ImMail2 } from 'react-icons/im';
import logo from '../assets/image/logo.png';

class Aside extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { isOpened, onOpenSideBar } = this.props;
    return (
      <div className={isOpened ? 'aside-main-wrapper open' : 'aside-main-wrapper'}>
        <div className="main-logo-wrapper flex-center">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
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
        <button type="button" className="menu-icon flex-center" onClick={onOpenSideBar}>
          <IconContext.Provider value={{ className: 'icon' }}>
            <AiOutlineMenuFold />
          </IconContext.Provider>
        </button>
      </div>
    );
  }
}

Aside.propTypes = {
  isOpened: propTypes.bool.isRequired,
  onOpenSideBar: propTypes.func.isRequired,
};
export default Aside;
