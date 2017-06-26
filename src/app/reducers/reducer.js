import { combineReducers } from 'redux'
import typeioReducer from './reducer.typeio';
import appReducer from './reducer.app';

export default combineReducers({
    app: appReducer,
    typeio: typeioReducer
});
