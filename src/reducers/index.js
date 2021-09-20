import {combineReducers} from "redux";
import crosswordReducer from './crosswordReducer';
import boardReducer from './boardReducer';

export default combineReducers({
    crossword: crosswordReducer,
    boards: boardReducer
});