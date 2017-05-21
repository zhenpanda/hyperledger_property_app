import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerOneIcon from './player_one_icon';
import PlayerTwoIcon from './player_two_icon';

import * as actions from './actions/index';

class Board extends Component {
  handleClickRoll() {
    this.props.testApi();
  }
  getBoard() {
    this.props.boardApi();
  }

  getHash() {
    if (this.props.board.current_board) {
      return(
        <span>{this.props.board.current_board.txhash}</span>
      )
    }
  }
  getBalancePlayerOne() {
    if (this.props.board.current_board) {
      return(
        <span>{this.props.board.current_board.player1.balance}</span>
      )
    }
  }
  getBalancePlayerTwo() {
    if (this.props.board.current_board) {
      return(
        <span>{this.props.board.current_board.player2.balance}</span>
      )
    }
  }

  componentWillMount() {
    this.props.boardApi();
  }

  render() {
    console.log('props in App', this.props.board);
    return (
      <div>
        <div className="row">

          <div className="board-frame col-xs-8">

            <div className="board-style z-depth-3">

              <div className="hoverable">
                <img className="street-block" src={require('../assets/images/cut_board/board_cutted_01.png')} />
              </div>
              <div className="hoverable">
                <img className="street-stick" src={require('../assets/images/cut_board/board_cutted_02.png')} />
              </div>

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

              <img className="street-center" src={require('../assets/images/cut_board/board_cutted_13.png')} />

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

                      <div className="collection hash-panel">
                        <a href="#!" className="collection-item">
                          <span className="">
                            {this.getHash()}
                          </span>
                        </a>
                      </div>

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
                            <td>${this.getBalancePlayerOne()}</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>${this.getBalancePlayerTwo()}</td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div className="red accent-2 player-plate hoverable">
            <span className="player-name flow-text" onClick={() => this.getBoard()} >Player1</span>
          </div>

            <div className="row">
              <div className="card-content card-panel player">

                  <div className="plays-action hoverable">
                    <div className="btn-style">
                      <img className="waves-effect purple lighten-3 btn roll-btn btn-roll" onClick={() => this.handleClickRoll()}  src={require('../assets/images/dice_red.png')} />
                    </div>
                  </div>

                  <div className="plays-action hoverable">
                    <div className="btn-style">
                      <img className="waves-effect waves-light btn roll-btn btn-img" src={require('../assets/images/bag.png')} />
                    </div>
                  </div>

                  <div className="plays-action hoverable">
                    <div className="btn-style">
                      <img className="waves-effect pink lighten-4 btn roll-btn btn-img" src={require('../assets/images/go.png')} />
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
  return { board: state.auth }
}

export default connect(mapStateToProps, actions)(Board);
