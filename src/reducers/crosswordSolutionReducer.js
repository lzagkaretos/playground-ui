import { CHECK_SOLUTION, GENERATE_CROSSWORD } from '../actions/types';

const crosswordSolutionReducer = (state = null, action) => {
  switch (action.type) {
    case CHECK_SOLUTION:
      return action.payload;
    case GENERATE_CROSSWORD:
      return null;
    default:
      return state;
  }
}

export default crosswordSolutionReducer;