import reducer from '../../src/app/reducers/reducer';
import {fromJS} from 'immutable';

describe('Reducer', ()=> {
    it('initial state', ()=>{
        const newState = reducer(undefined, {});
        const expectedNewState = fromJS({events: ['a','b']});

        expect(newState).toEqual(expectedNewState);
    });

    it('ADD_EVENT state', ()=> {
        const newState = reducer(undefined, {type: 'ADD_EVENT', payload: 'newEvent'});
        const expectedNewState = fromJS({events: ['a','b', 'newEvent']});

        expect(newState).toEqual(expectedNewState);
    });
});