import React, { Component } from 'react';
import Street from './street'
import Block from './block';

export default class Area extends Component {
  render() {
    return (
      <div>
        <div className="board-wall">
          <img className="board-style" src={require('../assets/images/board_center.png')} />
          <Block />
          <Street />
        </div>
      </div>
    );
  }
}
