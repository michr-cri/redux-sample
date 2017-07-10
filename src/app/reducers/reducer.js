import { combineReducers } from 'redux'
import typeioReducer from './reducer.typeio';
import feedbackReducer from './reducer.feedback';
import appReducer from './reducer.app';
import loginReducer from './reducer.login';
import cityReducer from './reducer.city';

export default combineReducers({
    app: appReducer,
    typeio: typeioReducer,
    feedback: feedbackReducer,
    login: loginReducer,
    city: cityReducer
});