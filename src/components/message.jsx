/* eslint-disable max-len */
import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="message-wrapper">
        <span className="name">Moise</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere debitis cum, veniam laboriosam 🙂😛</p>
      </div>
    );
  }
}

export default Message;
