import { combineReducers } from 'redux'
import typeioReducer from './state/reducers/reducer.typeio';
import feedbackReducer from './shared/reducers/reducer.feedback';
import stateReducer from './state/reducers/reducer.state';
import loginReducer from './login/reducers/reducer.login';
import cityReducer from './city/reducers/reducer.city';

export default combineReducers({
    state: stateReducer,
    typeio: typeioReducer,
    feedback: feedbackReducer,
    login: loginReducer,
    city: cityReducer
});