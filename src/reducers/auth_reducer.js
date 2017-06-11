// import from action types
import { FETCH_TEST,BOARD_TEST,ROLL_TEST,FETCH_BOARD } from '../actions/types';

// determent how stat should be returned when action is called
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TEST:
      return {...state, message: action.payload};
    case FETCH_BOARD:
      return {...state, message: action.payload};
    case BOARD_TEST:
      // console.log("this is action...", action);
      return {...state, current_board: action.payload };
    case ROLL_TEST:
      return {...state, current_board: action.payload };
  };
  return state;
};
