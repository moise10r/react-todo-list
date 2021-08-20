/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BiTimeFive } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';

const Info = () => {
  const [state, setstate] = useState({
    time: new Date(),
    date: new Date(),
  });

  const handelCallTime = () => {
    setstate({ ...state, time: new Date() });
  };

  const handelCallDate = () => {
    setstate({ ...state, date: new Date() });
  };

  useEffect(() => {
    setInterval(() => {
      handelCallTime();
      handelCallDate();
    }, 1000);
  }, []);

  const { time, date } = state;
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
};

export default Info;
