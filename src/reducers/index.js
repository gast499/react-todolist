import types from '../constants/';
import {combineReducers} from 'redux';
import todos from './todos';


export default combineReducers({
    todos,
});