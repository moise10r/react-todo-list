import React, { Component } from 'react';
import Header from './header';
import MainTaskContainer from './mainTasks';

class Main extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <div className="main-right-section">
        <Header />
        <MainTaskContainer />
      </div>
    );
  }
}

export default Main;
