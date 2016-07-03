import { combineReducers } from 'redux';
import goalStateHandler from './reducer';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
    goalStateHandler,
    routing
});

export default rootReducer;
