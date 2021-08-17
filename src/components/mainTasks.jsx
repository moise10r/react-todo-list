/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { VscClose } from 'react-icons/vsc';
import TaskCounter from './taskCounter';
import TaskList from './taskList';
import Info from './dayInfo';
import Message from './message';

class MainTaskContainer extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    const {
      value, onChange, onClose, isClick, onSubmit,
    } = this.props;
    return (
      <div className="main-tasks">
        <div className="main-task-wrapper">
          <div className="row1">
            <TaskCounter />
            <TaskList onChange={onChange} />
          </div>
          <div className="row2">
            <Info />
            <Message />
            <Message />
          </div>
        </div>
        { isClick && (
        <div className="add-task-form">
          <form id="form" onSubmit={(e) => onSubmit(e)}>
            <input onChange={(e) => onChange(e)} type="text" name="addTask" placeholder="Add Task" value={value} />
            <span className="close flex-center" onClick={onClose}>
              <IconContext.Provider value={{ className: 'icon' }}>
                <VscClose />
              </IconContext.Provider>
            </span>
          </form>
        </div>
        )}
      </div>
    );
  }
}

MainTaskContainer.propTypes = {
  isClick: propTypes.bool.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default MainTaskContainer;
