import { Component } from 'react';
import { IconContext } from 'react-icons';
import { FiMoreHorizontal } from 'react-icons/fi';

class TaskCounter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
            <span>113</span>
            <p className="title">Done</p>
          </div>
          <div className="counter flex-center">
            <span>113</span>
            <p className="title">Pending</p>
          </div>
          <div className="counter flex-center">
            <span>113</span>
            <p className="title">Progress</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskCounter;
