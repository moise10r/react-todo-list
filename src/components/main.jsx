/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React, { Component } from 'react';
import propTypes from 'prop-types';
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

  componentDidMount() {
    window.addEventListener('load', this.handleLoadTodos);
  }

  handleLoadTodos = () => {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setState({ todos });
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

  handleDelete = (id) => {
    const todos = JSON.parse(localStorage.getItem('tasks'));
    const upadetedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('tasks', JSON.stringify(upadetedTodos));
    this.setState({ todos: upadetedTodos });
  }

  handleCompleteTask = (id) => {
    const { todos } = this.state;
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
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

  handleCountCompletedTodos = () => {
    const { todos } = this.state;
    const newTodos = [...todos];
    const completedTodos = newTodos.filter((todo) => todo.completed);
    return completedTodos.length;
  }

  handleCountProgressTodos = () => {
    const { todos } = this.state;
    const newTodos = [...todos];
    const completedTodos = newTodos.filter((todo) => !todo.completed);
    return completedTodos.length;
  }

  handleCountTodos = () => {
    const { todos } = this.state;
    const newTodos = [...todos];
    return newTodos.length;
  }

  render() {
    const { value, isClick, todos } = this.state;
    const { isOpened } = this.props;
    return (
      <div className={isOpened ? 'main-right-section open' : 'main-right-section'}>
        <Header onClick={this.handleAddTaskForm} />
        <MainTaskContainer
          onChange={this.handleChange}
          isClick={isClick}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
          onUpdate={this.handleUpdate}
          onDelete={this.handleDelete}
          onComplete={this.handleCompleteTask}
          value={value}
          todos={todos}
          completedCounter={this.handleCountCompletedTodos}
          InprogressCounter={this.handleCountProgressTodos}
          todosCounter={this.handleCountTodos}
        />
      </div>
    );
  }
}

Main.propTypes = {
  isOpened: propTypes.bool.isRequired,
};
export default Main;
