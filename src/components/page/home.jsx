import React, { Component } from 'react';
import Aside from '../aside';
import Main from '../main';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    };
  }

  handleOpenSideBar = () => {
    const { isOpened } = this.state;
    this.setState({ isOpened: !isOpened });
  }

  render() {
    const { isOpened } = this.state;
    return (
      <div className="main-wrapper flex-center">
        <Aside isOpened={isOpened} onOpenSideBar={this.handleOpenSideBar} />
        <Main isOpened={isOpened} />
      </div>
    );
  }
}

export default Home;
