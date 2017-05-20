import React, { Component } from 'react';

// class component
export default class Card extends Component {
  render() {
    return (
      <div className="board-info">
        <div className="row">
          <div className="col-xs-12">
            <div className="card card-style">

          <div className="card-content">
            <span className="card-title">
              <img className="card-logo" src={require('../assets/images/logo.png')} />
            </span>
              <p>Welcome to Hyperledger Monopoly!</p>
            </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

// <div className="card-action">
//   <div className="row">
//     <div className="col-xs-6">
//       <a href="#">Buy</a>
//     </div>
//     <div className="col-xs-6">
//       <a href="#">Pass</a>
//     </div>
//   </div>
// </div>
