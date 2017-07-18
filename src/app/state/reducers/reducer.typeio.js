const intitalState = {
    initialResults: [],
    selectedItems: [],
    source: []
};

export default function typeioReducer(state = intitalState, action) {
    switch(action.type) {
        case 'SELECT_ITEM':
            var newState = Object.assign({}, state);
            newState.selectedItems.push(action.payload);
            return newState;
        case 'REMOVE_ITEM':
            var newState = Object.assign({}, state);
            var itemIndex = newState.selectedItems.indexOf(action.payload);
            if(itemIndex > -1) {
                newState.selectedItems.splice(itemIndex, 1);
            }
            return newState;
        case 'FETCH_FORM_INITIAL_DATA_SUCCESS':
            var newState = Object.assign({}, state);
            newState.initialResults = action.payload;
            return newState;
        case 'FETCH_FORM_SEED_DATA_SUCCESS':
            var newState = Object.assign({}, state);
            newState.source = action.payload;
            return newState;
        default:
            return state;
    }
}
