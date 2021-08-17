/* eslint-disable react/forbid-prop-types */
import { Component } from 'react';
import propTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import { FiMoreHorizontal } from 'react-icons/fi';

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { todos } = this.props;
    const localTodos = JSON.parse(localStorage.getItem('tasks'));
    const todoList = localTodos || todos;
    return (
      <div className="main-tasks-container">
        <div className="counter-header flex-between">
          <p>Task table</p>
          <span className="more">
            <IconContext.Provider value={{ className: 'icon' }}>
              <FiMoreHorizontal />
            </IconContext.Provider>
          </span>
        </div>
        <ul className="task-list">
          { todoList.map(({ id, title }) => (
            <li key={id} className="task flex-between">
              <input type="checkbox" name="task" id="check" />
              <input type="text" value={title} name="task" id="task" />
              <span className="icons">
                <IconContext.Provider value={{ className: 'icon' }}>
                  <TiEdit />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'icon' }}>
                  <AiOutlineDelete />
                </IconContext.Provider>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

TaskList.propTypes = {
  todos: propTypes.array.isRequired,
};

export default TaskList;
