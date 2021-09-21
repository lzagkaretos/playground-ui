import { GENERATE_CROSSWORD } from '../actions/types';

const crosswordReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERATE_CROSSWORD:
      return { ...action.payload };
    default:
      return state;
  }
};

export default crosswordReducer;