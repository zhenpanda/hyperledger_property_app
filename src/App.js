import React, { Component } from 'react';
import './App.css';
import PlayerOneHeader from './player_one_header';


class App extends Component {
  render() {
    return (
      <div>
        <PlayerOneHeader />

        {this.props.children}
      </div>
    );
  }
}
// <div className="progress waiter">
// <div className="indeterminate"></div>
// </div>

export default App;
