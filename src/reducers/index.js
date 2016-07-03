import { combineReducers } from 'redux';
import stateChangeHandler from './reducer';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
    stateChangeHandler,
    routing
});

export default rootReducer;
