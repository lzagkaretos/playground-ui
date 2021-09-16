import playground from '../apis/playground';
import {GENERATE_CROSSWORD} from "./types";

export const generateCrossword = () => async (dispatch) => {
    const response = await playground.get('crossword/generate');
    dispatch({type: GENERATE_CROSSWORD, payload: response.data})
}