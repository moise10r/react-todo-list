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

  handleChange = ({ currentTarget: input }) => {
    this.setState({
      value: input.value,
    });
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

  handleSubmit = (e) => {
    const { todos } = this.state;
    e.preventDefault();
    const newTodos = [...todos];
    const todo = {
      id: todos.length,
      title: e.target[0].value,
      completed: false,
    };
    newTodos.push(todo);
    this.setState({
      todos: newTodos,
    });
    console.log('submit');
  }

  render() {
    const { todos, value, isClick } = this.state;
    console.log(todos, isClick);
    return (
      <div className="main-right-section">
        <Header onClick={this.handleAddTaskForm} />
        <MainTaskContainer
          onChange={this.handleChange}
          isClick={isClick}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
          value={value}
          todos={todos}
        />
      </div>
    );
  }
}

export default Main;
