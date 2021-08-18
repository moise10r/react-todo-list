/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Header from './header';
import MainTaskContainer from './mainTasks';

const Main = ({ isOpened }) => {
  const [state, setstate] = useState({
    value: '',
    todos: [],
    isClick: false,
  });

  const handleLoadTodos = () => {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];
    setstate({ ...state, todos });
  };

  useEffect(() => {
    window.addEventListener('load', handleLoadTodos);
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    setstate({
      ...state,
      value: input.value,
    });
  };

  const handleAddTaskForm = () => {
    setstate({
      ...state,
      isClick: true,
    });
  };

  const handleClose = () => {
    setstate({
      ...state,
      isClick: false,
    });
  };

  const handleUpdate = (e, id) => {
    const todos = JSON.parse(localStorage.getItem('tasks'));
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.title = e.target.value;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(todos));
    setstate({ ...state, todos });
  };

  const handleDelete = (id) => {
    const todos = JSON.parse(localStorage.getItem('tasks'));
    const upadetedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('tasks', JSON.stringify(upadetedTodos));
    setstate({ ...state, todos: upadetedTodos });
  };

  const handleCompleteTask = (id) => {
    const todos = JSON.parse(localStorage.getItem('tasks'));
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(todos));
    setstate(todos);
  };

  const handleSubmit = (e) => {
    const todos = JSON.parse(localStorage.getItem('tasks'));
    e.preventDefault();
    if (e.target[0].value === '') {
      e.preventDefault();
    } else {
      const todo = {
        id: todos.length,
        title: e.target[0].value,
        completed: false,
      };
      todos.push(todo);
      localStorage.setItem('tasks', JSON.stringify(todos));
      setstate({
        ...state,
        todos,
      });
    }
  };

  const handleCountCompletedTodos = () => {
    const todos = JSON.parse(localStorage.getItem('tasks'));
    const newTodos = [...todos];
    const completedTodos = newTodos.filter((todo) => todo.completed);
    return completedTodos.length;
  };

  const handleCountProgressTodos = () => {
    const todos = JSON.parse(localStorage.getItem('tasks'));
    const newTodos = [...todos];
    const completedTodos = newTodos.filter((todo) => !todo.completed);
    return completedTodos.length;
  };

  const handleCountTodos = () => {
    const todos = JSON.parse(localStorage.getItem('tasks'));
    const newTodos = [...todos];
    return newTodos.length;
  };

  const { value, isClick, todos } = state;
  return (
    <div className={isOpened ? 'main-right-section open' : 'main-right-section'}>
      <Header onClick={handleAddTaskForm} />
      <MainTaskContainer
        onChange={handleChange}
        isClick={isClick}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onComplete={handleCompleteTask}
        value={value}
        todos={todos}
        completedCounter={handleCountCompletedTodos}
        InprogressCounter={handleCountProgressTodos}
        todosCounter={handleCountTodos}
      />
    </div>
  );
};

Main.propTypes = {
  isOpened: propTypes.bool.isRequired,
};
export default Main;
