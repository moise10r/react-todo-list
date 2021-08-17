/* eslint-disable no-param-reassign */
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

  handleUpdate = (e, id) => {
    const { todos } = this.state;
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.title = e.target.value;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(todos));
    this.setState(todos);
  }

  handleSubmit = (e) => {
    const { todos } = this.state;
    e.preventDefault();
    if (e.target[0].value === '') {
      e.preventDefault();
    } else {
      const newTodos = [...todos];
      const todo = {
        id: todos.length,
        title: e.target[0].value,
        completed: false,
      };
      newTodos.push(todo);
      localStorage.setItem('tasks', JSON.stringify(newTodos));
      this.setState({
        todos: newTodos,
      });
    }
  }

  render() {
    const { value, isClick, todos } = this.state;
    return (
      <div className="main-right-section">
        <Header onClick={this.handleAddTaskForm} />
        <MainTaskContainer
          onChange={this.handleChange}
          isClick={isClick}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
          onUpdate={this.handleUpdate}
          value={value}
          todos={todos}
        />
      </div>
    );
  }
}

export default Main;
