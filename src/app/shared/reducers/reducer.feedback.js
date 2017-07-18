export default function feedbackReducer(state = {}, action) {
    switch(action.type) {
        case 'SHOW_ERROR_MESSAGE':
            var newState = Object.assign({}, state);
            newState.title = action.payload.title;
            newState.message = action.payload.message;
            return newState;
        default:
            return state;
    }
}
