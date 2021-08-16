import React, { Component } from 'react';
import Aside from '../aside';
import Main from '../main';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main-wrapper flex-center">
        <Aside />
        <Main />
      </div>
    );
  }
}

export default Home;
