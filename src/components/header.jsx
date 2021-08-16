import { Component } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { RiMoonClearFill } from 'react-icons/ri';
import profile from '../assets/image/profile.jpeg';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main-header-wrapper">
        <div className="header-content-wrapper flex-between">
          <button type="button" className="add-task flex-center">
            {' '}
            <IconContext.Provider value={{ className: 'icon' }}>
              <AiOutlinePlusCircle />
            </IconContext.Provider>
            {' '}
            <span>Add New Task</span>
          </button>
          <button type="button" className="change-mode">
            <IconContext.Provider value={{ className: 'icon' }}>
              <RiMoonClearFill />
            </IconContext.Provider>
          </button>
          <div className="auth flex-center">
            <span>Moise Rushanika</span>
            <div className="profile-img">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
