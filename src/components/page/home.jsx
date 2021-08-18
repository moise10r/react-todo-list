import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aside from '../aside';
import Main from '../main';
import Contact from './contact';

const Home = () => {
  const [isOpened, setisOpened] = useState(false);
  const handleOpenSideBar = () => {
    setisOpened(!isOpened);
  };
  return (
    <div className="main-wrapper flex-center">
      <Aside isOpened={isOpened} onOpenSideBar={handleOpenSideBar} />
      <Switch>
        <Route path="/" exact render={() => <Main isOpened={isOpened} />} />
        <Route path="/contact" render={() => <Contact isOpened={isOpened} />} />
      </Switch>
    </div>
  );
};

export default Home;
