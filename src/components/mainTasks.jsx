import React, { Component } from 'react';
import TaskCounter from './taskCounter';
import TaskList from './taskList';
import Info from './dayInfo';
import Message from './message';

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
            <TaskList />
          </div>
          <div className="row2">
            <Info />
            <Message />
            <Message />
          </div>
        </div>
      </div>
    );
  }
}

export default MainTaskContainer;
