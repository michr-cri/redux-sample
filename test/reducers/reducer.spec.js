import reducer from '../../src/app/reducers/reducer.app';
import {fromJS} from 'immutable';

describe('Reducer', ()=> {
    xit('initial state', ()=>{
        const newState = reducer(undefined, {});
        const expectedNewState = fromJS({events: ['a','b']});

        expect(newState).toEqual(expectedNewState);
    });

    xit('ADD_EVENT state', ()=> {
        const newState = reducer(undefined, {type: 'ADD_EVENT', payload: 'newEvent'});
        const expectedNewState = fromJS({events: ['a','b', 'newEvent']});

        expect(newState).toEqual(expectedNewState);
    });
});