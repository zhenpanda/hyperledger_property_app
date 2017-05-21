import React, { Component } from 'react';

export default class PlayerOneIcon extends Component {
  render() {
    return (
      <div>
        <img className="player-icon" src={require('../assets/images/playerOne.png')} />
      </div>
    );
  }
}
