const intitalState = {
    totalCount: 0,
    page: []
};
export default function cityReducer(state = intitalState, action) {
    switch(action.type) {
        case 'FETCH_FORM_CITIES_SUCCESS':
            var newState = Object.assign({}, state);
            newState.totalCount = action.payload.totalCount;
            newState.page = action.payload.page;
            return newState;
        default:
            return state;
    }
}
