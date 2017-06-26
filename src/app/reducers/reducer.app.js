const intitalState = {
    formDataLoaded: false,
    selectedItems: []
};
export default function appReducer(state = intitalState, action) {
    switch(action.type) {
        case 'ADD_SELECTED_ITEMS':
            var newState = Object.assign({}, state);
            newState.selectedItems = newState.selectedItems.concat(action.payload);
            return newState;
        case 'FORM_DATA_LOADED':
            var newState = Object.assign({}, state);
            newState.formDataLoaded = true;
            return newState;
        default:
            return state;
    }
}
