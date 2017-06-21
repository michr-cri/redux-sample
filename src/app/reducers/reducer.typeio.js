import {fromJS} from 'immutable';

const intitalState = fromJS({
    selectedItems: []
});

export default function typeioReducer(state = intitalState, action) {
    switch(action.type) {
        case 'SELECT_ITEM':
            state = state.set('selectedItems', state.get('selectedItems').push(action.payload));
            return state;
        case 'REMOVE_ITEM':
            var itemIndex = state.get('selectedItems').findIndex(function(item) {return item===action.payload})
            state = state.set('selectedItems', state.get('selectedItems').delete(itemIndex));
            return state;
        default:
            return state;
    }
}
