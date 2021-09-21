import _ from 'lodash';
import playground from '../apis/playground';
import { CHECK_SOLUTION, FETCH_BOARDS, GENERATE_CROSSWORD } from './types';

export const fetchBoards = () => async (dispatch) => {
  const response = await playground.get('crossword/boards');
  dispatch({ type: FETCH_BOARDS, payload: response.data });
};

export const generateCrossword = (selectedBoard) => async (dispatch) => {
  const response = await playground.post('crossword/generate', {
    boardId: selectedBoard
  });
  const { identifier, board, totalCombinations, generationTime, wordSlots, emptyBoard } = response.data;
  dispatch({
    type: GENERATE_CROSSWORD, payload: {
      identifier, wordSlots, generationTime, totalCombinations,
      emptyBoard: emptyBoard.map(l => [...l]),
      board: board.map(l => [...l])
    }
  });
};

export const checkSolution = (filledBoard) => (dispatch, getState) => {
  const solutionResult = _.isEqual(filledBoard, getState().crossword.board);
  dispatch({ type: CHECK_SOLUTION, payload: solutionResult });
};