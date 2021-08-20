/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { AiTwotoneHome, AiOutlineMenuFold } from 'react-icons/ai';
import { FaProjectDiagram, FaCalendarAlt } from 'react-icons/fa';
import { ImMail2 } from 'react-icons/im';
import logo from '../assets/image/logo.png';

const Aside = ({ isOpened, onOpenSideBar }) => {
  const [current, setcurrent] = useState(null);
  const links = [
    {
      id: 1, to: '/', name: 'DashBoard', icon: <AiTwotoneHome />,
    },
    {
      id: 2, to: '', name: 'Project', icon: <FaProjectDiagram />,
    },
    {
      id: 3, to: '', name: 'Calendar', icon: <FaCalendarAlt />,
    },
    {
      id: 4, to: '/contact', name: 'Contact', icon: <ImMail2 />,
    },
  ];

  const handleActiveLink = (id) => {
    setcurrent(id);
  };

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
        {links.map(({
          id, name, icon, to,
        }) => (
          <li key={id} className="link " role="button" onClick={() => handleActiveLink(id)}>
            <Link to={to} className={`${current === id ? 'active' : ''}`}>
              <IconContext.Provider value={{ className: 'icon' }}>
                {icon}
              </IconContext.Provider>
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button type="button" className="menu-icon flex-center" onClick={onOpenSideBar}>
        <IconContext.Provider value={{ className: 'icon' }}>
          <AiOutlineMenuFold />
        </IconContext.Provider>
      </button>
    </div>
  );
};

Aside.propTypes = {
  isOpened: propTypes.bool.isRequired,
  onOpenSideBar: propTypes.func.isRequired,
};
export default Aside;
