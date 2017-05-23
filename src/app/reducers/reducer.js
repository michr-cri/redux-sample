import {fromJS} from 'immutable';

export default function reducer(state = fromJS({events: ['a','b']}), action) {
    switch(action.type) {
        case 'ADD_EVENT':
            state = state.set('events', state.get('events').push(action.payload));
            return state;
        default:
            return state;
    }
}
