import React, { Component } from 'react';
import Aside from '../aside';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main-wrapper">
        <Aside />
      </div>
    );
  }
}

export default Home;
