import React, { Component } from 'react';
import Card from './card';

// class component
export default class Board extends Component {
  render() {
    return (
      <div className="board-frame">
        <img className="board-style" src={require('../assets/images/board_test_design.png')} />
        <div className="board-info">
          <Card />
        </div>
      </div>
    );
  }
}
