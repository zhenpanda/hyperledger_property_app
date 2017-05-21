// import from action types
import { FETCH_TEST,BOARD_TEST } from '../actions/types';

// determent how stat should be returned when action is called
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TEST:
      return {...state, message: action.payload};
    case BOARD_TEST:
      // console.log("this is action...", action);
      return {...state, current_board: action.payload };
  };
  return state;
};

// switch (action.type) {
//   case AUTH_USER:
//     return {...state, error:'', authenticated: true };
//   case UNAUTH_USER:
//     return {...state, authenticated: false};
//   case AUTH_ERROR:
//     return {...state, error: action.payload};
//   case FETCH_MESSAGE:
//     return {...state, message: action.payload}
// };
