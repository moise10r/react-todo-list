import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { BiTimeFive } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';

class Info extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main-day-info">
        <p className="title">Day Info</p>
        <div className="info-detail flex-between">
          <div className="info-left-wrapper">
            <p className="date">Time</p>
            <p className="flex-center">
              <IconContext.Provider value={{ className: 'icon' }}>
                <BiTimeFive />
              </IconContext.Provider>
              <span>12:30:43</span>
            </p>
          </div>
          <div className="info-right-wrapper">
            <p className="date">Date</p>
            <p className="flex-center">
              <IconContext.Provider value={{ className: 'icon' }}>
                <FaCalendarAlt />
              </IconContext.Provider>
              <span>16 August 2021</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
