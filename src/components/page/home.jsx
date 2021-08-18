import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aside from '../aside';
import Main from '../main';
import Contact from './contact';

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
        <Switch>
          <Route path="/" exact render={() => <Main isOpened={isOpened} />} />
          <Route path="/contact" render={() => <Contact isOpened={isOpened} />} />
        </Switch>
      </div>
    );
  }
}

export default Home;
