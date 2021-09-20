import playground from '../apis/playground';
import { FETCH_BOARDS, GENERATE_CROSSWORD } from './types';

export const fetchBoards = () => async (dispatch) => {
  const response = await playground.get('crossword/boards');
  dispatch({ type: FETCH_BOARDS, payload: response.data });
};

export const generateCrossword = (selectedBoard) => async (dispatch) => {
  const response = await playground.post('crossword/generate', {
    boardId: selectedBoard
  });
  dispatch({ type: GENERATE_CROSSWORD, payload: response.data });
};