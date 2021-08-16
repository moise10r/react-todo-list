import React, { Component } from 'react';
import TaskCounter from './taskCounter';

class MainTaskContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main-tasks">
        <div className="main-task-wrapper flex-center">
          <div className="row1">
            <TaskCounter />
          </div>
          <div className="row2">
            <TaskCounter />
          </div>
        </div>
      </div>
    );
  }
}

export default MainTaskContainer;
