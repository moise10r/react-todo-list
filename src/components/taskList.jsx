import { Component } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import { FiMoreHorizontal } from 'react-icons/fi';

class TaskList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
          <li className="task flex-between">
            <input type="checkbox" name="task" id="check" />
            <input type="text" name="task" id="task" />
            <span className="icons">
              <IconContext.Provider value={{ className: 'icon' }}>
                <TiEdit />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: 'icon' }}>
                <AiOutlineDelete />
              </IconContext.Provider>
            </span>
          </li>
          <li className="task flex-between">
            <input type="checkbox" name="task" id="check" />
            <input type="text" name="task" id="task" />
            <span className="icons">
              <IconContext.Provider value={{ className: 'icon' }}>
                <TiEdit />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: 'icon' }}>
                <AiOutlineDelete />
              </IconContext.Provider>
            </span>
          </li>
          <li className="task flex-between">
            <input type="checkbox" name="task" id="check" />
            <input type="text" name="task" id="task" />
            <span className="icons">
              <IconContext.Provider value={{ className: 'icon' }}>
                <TiEdit />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: 'icon' }}>
                <AiOutlineDelete />
              </IconContext.Provider>
            </span>
          </li>
          <li className="task flex-between">
            <input type="checkbox" name="task" id="check" />
            <input type="text" name="task" id="task" />
            <span className="icons">
              <IconContext.Provider value={{ className: 'icon' }}>
                <TiEdit />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: 'icon' }}>
                <AiOutlineDelete />
              </IconContext.Provider>
            </span>
          </li>
          <li className="task flex-between">
            <input type="checkbox" name="task" id="check" />
            <input type="text" name="task" id="task" />
            <span className="icons">
              <IconContext.Provider value={{ className: 'icon' }}>
                <TiEdit />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: 'icon' }}>
                <AiOutlineDelete />
              </IconContext.Provider>
            </span>
          </li>
          <li className="task flex-between">
            <input type="checkbox" name="task" id="check" />
            <input type="text" name="task" id="task" />
            <span className="icons">
              <IconContext.Provider value={{ className: 'icon' }}>
                <TiEdit />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: 'icon' }}>
                <AiOutlineDelete />
              </IconContext.Provider>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default TaskList;
