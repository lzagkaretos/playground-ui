import { FETCH_BOARDS } from '../actions/types';

const boardReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return [...action.payload];
    default:
      return state;
  }
};

export default boardReducer;