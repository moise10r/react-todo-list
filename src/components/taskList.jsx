/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import { FiMoreHorizontal } from 'react-icons/fi';
import propTypes from 'prop-types';

const TaskList = ({ onUpdate, onDelete, onComplete }) => {
  const [current, setCurrent] = useState(null);
  const [disable, setdisable] = useState(false);

  const handleEdit = () => {
    setdisable(!disable);
  };
  const handeleShowControlBtn = (id) => {
    setCurrent(id);
  };
  const todos = JSON.parse(localStorage.getItem('tasks')) || [];
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
        { todos.map(({ id, title, completed }) => (
          <li key={id} onClick={() => handeleShowControlBtn(id)} className="task flex-between">
            <input type="checkbox" onChange={() => onComplete(id)} name="task" id="check" checked={completed} />
            <input type="text" onChange={(e) => onUpdate(e, id)} className={completed ? 'completed' : ''} value={title} name="editTask" id="task" disabled={disable} />
            <span className={`icons ${current === id ? 'show' : ''}`} id={title}>
              <span role="button" onClick={handleEdit}>
                <IconContext.Provider value={{ className: 'icon' }}>
                  <TiEdit />
                </IconContext.Provider>
              </span>
              <span role="button" onClick={() => onDelete(id)}>
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
};

TaskList.propTypes = {
  onUpdate: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
  onComplete: propTypes.func.isRequired,
};
export default TaskList;
