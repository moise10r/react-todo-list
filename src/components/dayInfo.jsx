/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { BiTimeFive } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      date: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.handelCallTime();
      this.handelCallDate();
    }, 1000);
  }

  handelCallTime = () => {
    const state = { ...this.state };
    this.setState({ ...state, time: new Date() });
  }

  handelCallDate = () => {
    const state = { ...this.state };
    this.setState({ ...state, date: new Date() });
  }

  render() {
    const { time, date } = this.state;
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
              <span>{time.toLocaleTimeString()}</span>
            </p>
          </div>
          <div className="info-right-wrapper">
            <p className="date">Date</p>
            <p className="flex-center">
              <IconContext.Provider value={{ className: 'icon' }}>
                <FaCalendarAlt />
              </IconContext.Provider>
              <span>{date.toLocaleDateString()}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
