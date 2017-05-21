import axios from 'axios';
// import { browserHistory } from 'react-router';
import { FETCH_TEST, BOARD_TEST } from './types';

// url location of the server
const ROOT_URL = 'https://monopoly-api.mybluemix.net/';
const INIT_URL = 'https://monopoly-api.mybluemix.net/board';

const BOARD_URL = 'https://monopoly-api.mybluemix.net/board';

// make sure server is on when trying to call it!
export function testApi() {
  return function(dispatch) {
    console.log("sending test calls...");
    axios.get(`${INIT_URL}`)
      .then(response => {
        dispatch({type: FETCH_TEST});
        // localStorage.setItem('token', response.data.token);
        // browserHistory.push('/feature');
        console.log(response);
      })
      .catch(response => {
        // show error
        // dispatch(authError(response.response.data.error))
      });
  }
}

export function boardApi() {
  return function(dispatch) {
    console.log("reading game board...");
    axios.get(`${BOARD_URL}`)
      .then(response => {
        dispatch({
          // console.log(response.data);
          type: BOARD_TEST,
          payload: response.data
        });
      })
      .catch(response => {
      });
  }
}
