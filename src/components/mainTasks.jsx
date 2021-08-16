import React, { Component } from 'react';
import TaskCounter from './taskCounter';
import TaskList from './taskList';

class MainTaskContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main-tasks">
        <div className="main-task-wrapper">
          <div className="row1">
            <TaskCounter />
            <TaskCounter />
            <TaskList />
          </div>
          <div className="row2">
            <TaskCounter />
            <TaskCounter />
            <TaskCounter />
          </div>
        </div>
      </div>
    );
  }
}

export default MainTaskContainer;
