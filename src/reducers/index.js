import {combineReducers} from "redux";
import crosswordReducer from './crosswordReducer';
import boardReducer from './boardReducer';
import crosswordSolutionReducer from './crosswordSolutionReducer';

export default combineReducers({
    crossword: crosswordReducer,
    boards: boardReducer,
    crosswordSolution: crosswordSolutionReducer
});