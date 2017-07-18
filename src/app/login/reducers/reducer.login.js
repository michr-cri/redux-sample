const intitalState = {
    authenticationSucceeded: false
};
export default function loginReducer(state = intitalState, action) {
    switch(action.type) {
        case 'AUTHENTICATION_SUCCESS':
            var newState = Object.assign({}, state);
            newState.authenticationSucceeded = true;
            return newState;
        case 'LOGOUT_SUCCESS':
            var newState = Object.assign({}, state);
            newState.authenticationSucceeded = false;
            return newState;
        default:
            return state;
    }
}
