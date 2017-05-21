import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/game">
          <div className="start-btn">
            <span className="start-text"> Start Game </span>
          </div>
        </Link>
      </div>
    );
  }
}
