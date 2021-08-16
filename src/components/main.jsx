import React, { Component } from 'react';
import Header from './header';

class Main extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <div className="main-right-section">
        <Header />
      </div>
    );
  }
}

export default Main;
