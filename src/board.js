import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';

import * as actions from './actions/index';

class Board extends Component {
  handleClickRoll() {
    // signinUser from actions
    // console.log(this.props);
    this.props.testApi()
  }

  render() {
    return (
      <div className="board-frame">
        <img className="board-style" src={require('../assets/images/board_test_design.png')} />

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

            <div className="row">

              <div className="col-xs-12">
                <div className="card">

                  <div className="card-content plays-style">
                    <span className="plays-title">PLAYER ACTION</span>
                  </div>

                <div className="plays-action">
                  <div className="btn-style">
                    <img className="waves-effect waves-light btn roll-btn" onClick={() => this.handleClickRoll()}  src={require('../assets/images/dice_red.png')} />
                    </div>
                  </div>
                </div>

              </div>
            </div>

        </div>
      </div>
    );
  }
}


// mapstate to props, actions returns into state
function mapStateToProps(state) {
  return { };
}
export default connect(mapStateToProps, actions)(Board);
