import {fromJS} from 'immutable';

const intitalState = fromJS({
    selectedItems: []
});
export default function appReducer(state = intitalState, action) {
    switch(action.type) {
        case 'ADD_SELECTED_ITEMS':
            state = state.set('selectedItems', state.get('selectedItems').concat(action.payload));
            return state;
        default:
            return state;
    }
}
