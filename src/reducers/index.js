import {combineReducers} from "redux";
import crosswordReducer from './crosswordReducer';

export default combineReducers({
    crossword: crosswordReducer
});