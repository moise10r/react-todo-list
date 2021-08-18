import { Component } from 'react';
import propTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FiMoreHorizontal } from 'react-icons/fi';

class TaskCounter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { completedCounter } = this.props;
    return (
      <div className="counter-container">
        <div className="counter-header flex-between">
          <p>All Task Available</p>
          <span className="more">
            <IconContext.Provider value={{ className: 'icon' }}>
              <FiMoreHorizontal />
            </IconContext.Provider>
          </span>
        </div>
        <div className="counters flex-between">
          <div className="counter flex-center">
            <span>{completedCounter()}</span>
            <p className="title">Done</p>
          </div>
          <div className="counter flex-center">
            <span>113</span>
            <p className="title">Progress</p>
          </div>
          <div className="counter flex-center">
            <span>113</span>
            <p className="title">Pending</p>
          </div>
        </div>
      </div>
    );
  }
}

TaskCounter.propTypes = {
  completedCounter: propTypes.number.isRequired,
};

export default TaskCounter;
