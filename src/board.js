import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerOneIcon from './player_one_icon';
import PlayerTwoIcon from './player_two_icon';

import * as actions from './actions/index';

class Board extends Component {
  rollDice(){
    this.props.rollApi();
    alert("Sending roll request to HyberLedger please wait...");
  }
  getBoard() {
    this.props.boardApi();
  }
  renderPlayerPlayer1() {
    if (this.props.board.current_board) {
      let pos = this.props.board.current_board.player1.currentPosition.id;
      switch (pos) {
        case 1: return(<a className="btn btn-floating btn-large red pulse pos-one"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 2: return(<a className="btn btn-floating btn-large red pulse pos-two"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 3: return(<a className="btn btn-floating btn-large red pulse pos-three"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 4: return(<a className="btn btn-floating btn-large red pulse pos-four"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 5: return(<a className="btn btn-floating btn-large red pulse pos-five"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 6: return(<a className="btn btn-floating btn-large red pulse pos-six"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 7: return(<a className="btn btn-floating btn-large red pulse pos-seven"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 8: return(<a className="btn btn-floating btn-large red pulse pos-eight"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 9: return(<a className="btn btn-floating btn-large red pulse pos-nine"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 10: return(<a className="btn btn-floating btn-large red pulse pos-ten"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 11: return(<a className="btn btn-floating btn-large red pulse pos-11"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)

        case 12: return(<a className="btn btn-floating btn-large red pulse pos-12"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 13: return(<a className="btn btn-floating btn-large red pulse pos-13"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 14: return(<a className="btn btn-floating btn-large red pulse pos-14"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 15: return(<a className="btn btn-floating btn-large red pulse pos-15"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 16: return(<a className="btn btn-floating btn-large red pulse pos-16"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 17: return(<a className="btn btn-floating btn-large red pulse pos-17"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 18: return(<a className="btn btn-floating btn-large red pulse pos-18"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 19: return(<a className="btn btn-floating btn-large red pulse pos-19"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 20: return(<a className="btn btn-floating btn-large red pulse pos-20"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)

        case 21: return(<a className="btn btn-floating btn-large red pulse pos-21"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 22: return(<a className="btn btn-floating btn-large red pulse pos-22"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 23: return(<a className="btn btn-floating btn-large red pulse pos-23"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 24: return(<a className="btn btn-floating btn-large red pulse pos-24"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 25: return(<a className="btn btn-floating btn-large red pulse pos-25"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 26: return(<a className="btn btn-floating btn-large red pulse pos-26"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 27: return(<a className="btn btn-floating btn-large red pulse pos-27"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 28: return(<a className="btn btn-floating btn-large red pulse pos-28"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 29: return(<a className="btn btn-floating btn-large red pulse pos-29"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 30: return(<a className="btn btn-floating btn-large red pulse pos-30"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)

        case 31: return(<a className="btn btn-floating btn-large red pulse pos-31"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 32: return(<a className="btn btn-floating btn-large red pulse pos-32"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 33: return(<a className="btn btn-floating btn-large red pulse pos-33"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 34: return(<a className="btn btn-floating btn-large red pulse pos-34"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 35: return(<a className="btn btn-floating btn-large red pulse pos-35"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 36: return(<a className="btn btn-floating btn-large red pulse pos-36"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 37: return(<a className="btn btn-floating btn-large red pulse pos-37"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 38: return(<a className="btn btn-floating btn-large red pulse pos-38"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 39: return(<a className="btn btn-floating btn-large red pulse pos-39"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)
        case 40: return(<a className="btn btn-floating btn-large red pulse pos-40"><img className="red darken-3" src={require('../assets/images/playerOne.png')} /></a>)

        default:
          return(
            <a className="btn btn-floating btn-large red pulse pos-one">
              <img className="red darken-3" src={require('../assets/images/playerOne.png')} />
            </a>
          )
          break;
      }
    }
  }

  getHash() {
    if (this.props.board.current_board) {
      return(
        <div className="hash-panel">{this.props.board.current_board.txhash}</div>
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

  playerOneBuy() {
    this.props.buyApi();
    alert("Sending buy request to HyberLedger please wait...")
  }

  componentWillMount() {
    this.props.boardApi();
  }

  render() {
    console.log('props in App', this.props.board);
    alert("Updating....");
    return (
      <div>
        <div className="row">

          <div className="board-frame col-xs-8">

            <div className="board-style z-depth-3">

              <div className="player-icon">
                {this.renderPlayerPlayer1()}
              </div>

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
            <span className="player-name flow-text" onClick={() => this.getBoard()}>
              <img className="refresh" src={require('../assets/images/refresh.jpg')} />Player1
            </span>
          </div>

            <div className="row">
              <div className="card-content card-panel player">

                  <div className="plays-action hoverable">
                    <div className="btn-style">
                      <img className="waves-effect purple lighten-3 btn roll-btn btn-roll" onClick={() => this.rollDice()}  src={require('../assets/images/dice_red.png')} />

                    </div>
                  </div>

                  <div className="plays-action hoverable">
                    <div className="btn-style">
                      <img className="waves-effect waves-light btn roll-btn btn-img" onClick={() => this.playerOneBuy()} src={require('../assets/images/bag.png')} />
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
