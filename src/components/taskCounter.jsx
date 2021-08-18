import propTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FiMoreHorizontal } from 'react-icons/fi';

const TaskCounter = ({ completedCounter, InprogressCounter, todosCounter }) => (
  <div className="counter-container">
    <div className="counter-header flex-between">
      <p>All Task Available</p>
      <span className="more">
        <IconContext.Provider value={{ className: 'icon' }}>
          <FiMoreHorizontal />
        </IconContext.Provider>
      </span>
    </div>
    <div className="counters flex-between">
      <div className="counter flex-center">
        <span>{completedCounter()}</span>
        <p className="title">Done</p>
      </div>
      <div className="counter flex-center">
        <span>{InprogressCounter()}</span>
        <p className="title">Progress</p>
      </div>
      <div className="counter flex-center">
        <span>{todosCounter()}</span>
        <p className="title">All</p>
      </div>
    </div>
  </div>
);

TaskCounter.propTypes = {
  completedCounter: propTypes.func.isRequired,
  InprogressCounter: propTypes.func.isRequired,
  todosCounter: propTypes.func.isRequired,
};

export default TaskCounter;
