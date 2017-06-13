import axios from 'axios';
// import { browserHistory } from 'react-router';
import { FETCH_TEST, FETCH_BOARD, BOARD_TEST, ROLL_TEST, BUY_TEST } from './types';
import {Spinner,pendingTasksReducer,pendingTask,begin,end} from 'react-redux-spinner';

// url location of the server
const RESTART_URL = 'https://monopoly-api.mybluemix.net/player/start';
const ROOT_URL = 'https://monopoly-api.mybluemix.net/';
const INIT_URL = 'https://monopoly-api.mybluemix.net/board';

const BOARD_URL = 'https://monopoly-api.mybluemix.net/board';
const ROLL_URL = 'https://monopoly-api.mybluemix.net/player/roll';
const BUY_URL = 'https://monopoly-api.mybluemix.net/player/action';
const PASS_URL = 'https://monopoly-api.mybluemix.net/player/pass';

const ROLL_URL_PLAYER2 = 'https://monopoly-api.mybluemix.net/player/roll2';
const BUY_URL_PLAYER2 = 'https://monopoly-api.mybluemix.net/player/action2';
const PASS_URL_PLAYER2 = 'https://monopoly-api.mybluemix.net/player/pass2';

// https://monopoly-api.mybluemix.net/player/start

//git push heroku master

// make sure server is on when trying to call it!
export function testApi() {
  return function(dispatch) {
    console.log("sending test calls...");
    axios.get(`${INIT_URL}`)
      .then(response => {
        dispatch({type: FETCH_TEST});
        console.log(response);
      })
      .catch(response => {
      });
  }
}

export function boardApi() {
  return function(dispatch) {
    dispatch({
      type: FETCH_BOARD,
      [ pendingTask ]: begin
    });
    axios.get(`${BOARD_URL}`)
      .then(response => {
        console.log(response);
        dispatch({
          type: BOARD_TEST,
          [ pendingTask ]: end,
          payload: response.data
        });
      })
      .catch(response => {
      });
  }
}

export function rollApi(inputPlayer) {
  return function(dispatch) {
    console.log(inputPlayer, "action dispatcher");
    if (inputPlayer==="P1") {
      dispatch({
        type: FETCH_BOARD,
        [ pendingTask ]: begin
      });
      axios.get(`${ROLL_URL}`)
      .then(response => {
        // alert(response.data.result);
        axios.get(`${BOARD_URL}`)
        .then(response => {
          dispatch({
            type: BOARD_TEST,
            [ pendingTask ]: end,
            payload: response.data
          });
        })
      })
      .catch(response => {
      });
    } else if(inputPlayer==="P2") {
        dispatch({
          type: FETCH_BOARD,
          [ pendingTask ]: begin
        });
        axios.get(`${ROLL_URL_PLAYER2}`)
        .then(response => {
          // alert(response.data.result);
          axios.get(`${BOARD_URL}`)
          .then(response => {
            dispatch({
              type: BOARD_TEST,
              [ pendingTask ]: end,
              payload: response.data
            });
          })
        })
        .catch(response => {
        });
    }
  }
}

export function buyApi(inputPlayer) {
  return function(dispatch) {
    if (inputPlayer==="P1") {
      dispatch({
        type: FETCH_BOARD,
        [ pendingTask ]: begin
      });
      axios.get(`${BUY_URL}`)
      .then(response => {
        // alert(response.data.result);
        axios.get(`${BOARD_URL}`)
        .then(response => {
          dispatch({
            type: BOARD_TEST,
            [ pendingTask ]: end,
            payload: response.data
          });
        })
      })
      .catch(response => {
      });
    }else if (inputPlayer==="P2") {
      dispatch({
        type: FETCH_BOARD,
        [ pendingTask ]: begin
      });
      axios.get(`${BUY_URL_PLAYER2}`)
      .then(response => {
        // alert(response.data.result);
        axios.get(`${BOARD_URL}`)
        .then(response => {
          dispatch({
            type: BOARD_TEST,
            [ pendingTask ]: end,
            payload: response.data
          });
        })
      })
      .catch(response => {
      });
    }
  }
}

export function passApi(inputPlayer) {
  return function(dispatch) {
    if (inputPlayer==="P1") {
      dispatch({
        type: FETCH_BOARD,
        [ pendingTask ]: begin
      });
      axios.get(`${PASS_URL}`)
      .then(response => {
        // alert(response.data.result);
        axios.get(`${BOARD_URL}`)
        .then(response => {
          dispatch({
            type: BOARD_TEST,
            [ pendingTask ]: end,
            payload: response.data
          });
        })
      })
      .catch(response => {
      });
    }else if (inputPlayer==="P2") {
      dispatch({
        type: FETCH_BOARD,
        [ pendingTask ]: begin
      });
      axios.get(`${PASS_URL_PLAYER2}`)
      .then(response => {
        // alert(response.data.result);
        axios.get(`${BOARD_URL}`)
        .then(response => {
          dispatch({
            type: BOARD_TEST,
            [ pendingTask ]: end,
            payload: response.data
          });
        })
      })
      .catch(response => {
      });
    }
  }
}
