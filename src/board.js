import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions/index';

class Board extends Component {
  handleClickRoll() {
    // signinUser from actions
    // console.log(this.props);
    this.props.testApi()
  }

  render() {
    return (
      <div>
        <div className="row">

          <div className="board-frame col-xs-8">

            <div className="board-style z-depth-3">

              <img className="street-block hoverable" src={require('../assets/images/cut_board/board_cutted_01.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_02.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_03.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_04.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_05.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_06.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_07.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_08.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_09.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_10.png')} />
              <img className="street-block hoverable" src={require('../assets/images/cut_board/board_cutted_11.png')} />

              <div className="street-hor">
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_12.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_15.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_17.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_19.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_21.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_23.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_25.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_27.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_29.png')} />
              </div>

              <img className="street-center hoverable" src={require('../assets/images/cut_board/board_cutted_13.png')} />

              <div className="street-hor">
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_14.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_16.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_18.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_20.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_22.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_24.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_26.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_28.png')} />
                <img className="street-shelf hoverable" src={require('../assets/images/cut_board/board_cutted_30.png')} />
              </div>

              <img className="street-block hoverable" src={require('../assets/images/cut_board/board_cutted_31.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_32.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_33.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_34.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_35.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_36.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_37.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_38.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_39.png')} />
              <img className="street-stick hoverable" src={require('../assets/images/cut_board/board_cutted_40.png')} />
              <img className="street-block hoverable" src={require('../assets/images/cut_board/board_cutted_41.png')} />

            </div>
          </div>
          <div className="board-info col-xs-3">

          <div className="row">
            <div className="col-xs-12 card-top">
              <div className="card card-style">

                <div className="card-content">
                  <span className="card-title">
                  <img className="card-logo card-panel light-green hoverable" src={require('../assets/images/logo.png')} />
                  </span>

                  <div className="player-stats">
                    <div className="card-content card-panel blue lighten-1 hoverable">

                      <table>
                        <thead>
                          <tr>
                              <th>Player</th>
                              <th>Cash Flow</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>$2500</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>$5000</td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div className="card-logo card-panel red accent-2 player-plate hoverable">
            <span className="player-name flow-text">Player 1</span>
          </div>

            <div className="row">
              <div className="card-content card-panel player pink lighten-4">

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
