import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

// url location of the server
const ROOT_URL = 'http://localhost:5000';
// make sure server is on when trying to call it!

/*
  as action creator always return an object
  that object is an action
  that action has a type
  but sometime it return a function,

  by using redux thunk we can retun a function from action creator
  that function has access to dispatch
  the dispatch accepts the actions and forwards it to all the reducers

  redux thunk is great with async functions
*/

// sign in user creator function, will to attached to sign component
export function signinUser({email,password}) {
  // submit email/password to server
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email,password})
      // if request is good, chain promise
      .then(response => {
        console.log("trying to auth user with ajax...");
        // update state to show user is authed, it is good save the JWT token
        dispatch( { type: AUTH_USER } );
        // save JWT token in localStorage api in browser
        localStorage.setItem('token', response.data.token);
        // redirect to the route '/feature' with push
        browserHistory.push('/feature');
      })
      .catch(() => {
        // if request is bad, return error to redux
        dispatch(authError('Bad Login Info'));
      });
  }
};
// error on sign in
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
};

/*
// sign up user
export function signupUser({ email,password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email,password})
      .then(response => {
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => {
        // show error
        dispatch(authError(response.response.data.error))
      });
  }
}

// export user
export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER}
}

// check API from server
export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {
        console.log((response));
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
*/
