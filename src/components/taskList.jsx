/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import { FiMoreHorizontal } from 'react-icons/fi';

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false,
      currentTask: null,
    };
  }

  handleEdit = () => {
    const state = { ...this.state };
    const { disabled } = this.state;
    if (!disabled) {
      this.setState({ ...state, disabled: true });
    } else {
      this.setState({ ...state, disabled: false });
    }
  }

  handeleShowControlBtn = (id) => {
    this.setState({ currentTask: id });
  }

  render() {
    const { disabled, currentTask } = this.state;
    const todos = JSON.parse(localStorage.getItem('tasks'));
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
          { todos.map(({ id, title }) => (
            <li id={id} key={id} onClick={() => this.handeleShowControlBtn(id)} className="task flex-between">
              <input type="checkbox" name="task" id="check" />
              <input type="text" value={title} name="task" id="task" disabled={disabled} />
              <span className={`icons ${currentTask === id ? 'show' : ''}`} id={title}>
                <span role="button" onClick={this.handleEdit}>
                  <IconContext.Provider value={{ className: 'icon' }}>
                    <TiEdit />
                  </IconContext.Provider>
                </span>
                <span>
                  <IconContext.Provider value={{ className: 'icon' }}>
                    <AiOutlineDelete />
                  </IconContext.Provider>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
