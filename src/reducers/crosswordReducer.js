import { GENERATE_CROSSWORD } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GENERATE_CROSSWORD:
      return { ...action.payload };
    default:
      return state;
  }
}