import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PlayerOneHeader extends Component {
  render() {
    return (
      <div>
        <Link to="/game">
          <div className="start-btn card-logo card-panel teal lighten-2">
            <div className="start-text">Start Hyperledger Monopoly!</div>
          </div>
        </Link>
      </div>
    );
  }
}
