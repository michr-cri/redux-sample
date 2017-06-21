import { combineReducers } from 'redux'
import typeioReducer from './reducer.typeio';
import appReducer from './reducer.app';

// export default combineReducers({
//     app: appReducer,
//     typeio: typeioReducer
// });

export default function reducer(state, action) {
    if(action.type === 'RESET') {
        state = undefined;
    }

    return combineReducers({
        app: appReducer,
        typeio: typeioReducer
    })(state, action);
}
