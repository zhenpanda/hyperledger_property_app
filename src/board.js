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

            <div className="board-style">

              <img className="street-block" src={require('../assets/images/cut_board/board_cut_design_01.png')} />
              <img className="street-row" src={require('../assets/images/cut_board/board_cut_design_02.png')} />
              <img className="street-block" src={require('../assets/images/cut_board/board_cut_design_03.png')} />

              <img className="street-hor" src={require('../assets/images/cut_board/board_cut_design_04.png')} />
              <img className="street-center" src={require('../assets/images/cut_board/board_cut_design_05.png')} />
              <img className="street-hor" src={require('../assets/images/cut_board/board_cut_design_06.png')} />

              <img className="street-block" src={require('../assets/images/cut_board/board_cut_design_07.png')} />
              <img className="street-row" src={require('../assets/images/cut_board/board_cut_design_08.png')} />
              <img className="street-block" src={require('../assets/images/cut_board/board_cut_design_09.png')} />


            </div>
          </div>
          <div className="board-info col-xs-3">

          <div className="row">
            <div className="col-xs-12 card-top">
              <div className="card card-style">

                <div className="card-content">
                  <span className="card-title">
                  <img className="card-logo card-panel light-green" src={require('../assets/images/logo.png')} />
                  </span>

                  <div className="player-stats">
                    <div className="card-content card-panel blue lighten-1">

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

          <div className="card-logo card-panel red accent-2 player-plate">
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
