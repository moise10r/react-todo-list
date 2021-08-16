/* eslint-disable max-len */
import React, { Component } from 'react';
import Header from './header';
import MainTaskContainer from './mainTasks';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      todos: [],
      isClick: false,
    };
  }

  handleChange = (e) => {
    console.log(e);
  }

  handleAddTaskForm = () => {
    this.setState({
      isClick: true,
    });
  }

  handleClose = () => {
    this.setState({
      isClick: false,
    });
  }

  render() {
    const { todos, value, isClick } = this.state;
    console.log(todos, isClick);
    return (
      <div className="main-right-section">
        <Header onClick={this.handleAddTaskForm} />
        <MainTaskContainer onChange={this.handleChange} isClick={isClick} onClose={this.handleClose} value={value} />
      </div>
    );
  }
}

export default Main;
