import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PlayerOneHeader extends Component {
  render() {
    return (
      <div>
        <Link to="/game">
          <div className="start-btn">
            <span className="start-text"> Ready Player One! </span>
          </div>
        </Link>
      </div>
    );
  }
}
